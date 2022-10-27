import { getPosts, dataPagePost } from './requests/posts.js'
import { setAtLocal } from './localStorage.js'

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

}

function renderCategories (categories){
    
    const ul = document.querySelector("#categories")
    console.log(categories)
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

function renderSelectedCategory (post){
    const ul = document.querySelector("#posts")
    ul.innerHTML = ""
    
    post.forEach((infos)=>{
        
        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="card">
        <img src="${infos.image}" alt="${infos.title}">
        <div class="infos">
            <h2 class="title">${infos.title}</h2>
            <p class="desc">${infos.description}</p>
        </div>
        <span class="${infos.category} link" id="${infos.id}" data-post="src/pages/post/index.html">Acessar Conteúdo</span>
        </li>
        `)
    })
    const redirects = document.querySelectorAll(".link")
    setAtLocal(redirects)
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
    `)
}

async function renderJustListCategories () {
    const ul = document.querySelector("ul")

    ul.insertAdjacentHTML("afterbegin",
    `
    <h1>teste</h1>
    `)
}

export { renderCardPost, renderCategories, renderSelectedCategory, renderJustPost }