import { getPosts, dataPagePost } from './requests/posts.js'
import { setAtLocal, insertInLocalStorage } from './localStorage.js'

async function renderCardPost (){

    const posts = await getPosts()
    const ul = document.querySelector("#posts")

    ul.innerHTML = ""
    posts.forEach((post)=>{

        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="card">
            <img src="${post.image}" alt="${post.title}">
            <div class="infos">
                <h2 class="title">${post.title}</h2>
                <p class="desc">${post.description}</p>
            </div>
            <span class="${post.category} link" id="${post.id}" data-post="src/pages/post/index.html">Acessar conteúdo</span>
        </li>
        `)
    })

    const redirects = document.querySelectorAll(".link")

    redirects.forEach((choice)=>{
    
        choice.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

            let pref = {
                id: event.target.id,
                category: `${category}`,
            }
            insertInLocalStorage(JSON.stringify(pref))
            window.location.replace(event.target.dataset.post)
        }
    })
}

function renderCategories (categories){

    const ul = document.querySelector("#categories")

    categories.forEach((category)=>{

        ul.insertAdjacentHTML("beforeend",
        `
        <li class="category">
            <button id="category">${category}</button>
        </li>
        `)
    })

    const categoriesNode = document.querySelectorAll("#category")

    return categoriesNode
}

function renderSelectedCategory (posts){

    const ul = document.querySelector("#posts")
    ul.innerHTML = ""
    
    posts.forEach((info)=>{

        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="card">
            <img src="${info.image}" alt="${info.title}">
            <div class="info">
                <h2 class="title">${info.title}</h2>
                <p class="desc">${info.description}</p>
            </div>
            <span class="${info.category} link" id="${info.id}" data-post="src/pages/post/index.html">Acessar Conteúdo</span>
        </li>
        `)
    })

    const redirects = document.querySelectorAll(".link")

    setAtLocal(redirects) 

    redirects.forEach((choice)=>{

        choice.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

            let pref = {
                id: event.target.id,
                category: `${category}`,
            }
            insertInLocalStorage(JSON.stringify(pref))
            window.location.replace(event.target.dataset.post)
        }
    })
}

async function renderJustPost (){

    const post = await dataPagePost()
    const main = document.querySelector("main")

    main.insertAdjacentHTML("afterbegin",
        `
        <section>
            <h1>${post.title}</h1>
            <p>${post.description}</p>
        </section>
        <section>
            <div>
                <img src="${post.image}" alt="${post.title}">
            </div>
            <p>${post.content}</p>
        </section>
        `
    )
}

export { renderCardPost, renderCategories, renderSelectedCategory, renderJustPost }