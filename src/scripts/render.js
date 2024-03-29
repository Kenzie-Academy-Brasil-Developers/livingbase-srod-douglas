import { getPosts, dataPagePost } from './requests/posts.js'
import { setAtLocal, insertInLocalStorage } from './localStorage.js'
import { observer, checkScroll } from './infiniteScroll.js'

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
                <p class="desc c-g-2">${post.description}</p>
            </div>
            <span class="${post.category} link c-b-1" id="${post.id}" data-post="src/pages/post/index.html">Acessar conteúdo</span>
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
            <button id="category" class="bt-grey f-4-s-b">${category}</button>
        </li>
        `)
    })

    const categoriesNode = document.querySelectorAll("#category")

    categoriesNode.forEach((bt)=>{

        bt.onclick = () => {
            checkScroll("selected")
        }
    })

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
                <p class="desc c-g-2">${info.description}</p>
            </div>
            <span class="${info.category} link c-b-1" id="${info.id}" data-post="src/pages/post/index.html">Acessar Conteúdo</span>
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
        <section class="post-sec-title-desc">
            <h1 class="post-title f-1-s-b">${post.title}</h1>
            <p class="post-desc f-4-r g-2">${post.description}</p>
        </section>
        <section class="post-sec-img-content">
            <div class="post-div-img">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <p class="post-content f-4-r g-2">${post.content}</p>
        </section>
        `
    )
}

async function renderScroll (page) {

    const posts = await getPosts(page)
    const ul = document.querySelector("#posts")

    posts.forEach((post)=>{

        ul.insertAdjacentHTML("beforeend",
        `
        <li class="card">
            <img src="${post.image}" alt="${post.title}">
            <div class="infos">
                <h2 class="title">${post.title}</h2>
                <p class="desc c-g-2">${post.description}</p>
            </div>
            <span class="${post.category} link c-b-1" id="${post.id}" data-post="src/pages/post/index.html">Acessar conteúdo</span>
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
    const observed = document.querySelector("#observed")
    observer.observe(observed)
}

export { renderCardPost, renderCategories, renderSelectedCategory, renderJustPost, renderScroll }