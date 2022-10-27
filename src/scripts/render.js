import getPosts from './requests/posts.js'

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
        <span class="${post.category} link" id="${post.id}">Acessar conteúdo</span>
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
        <span class="link" id="${infos.id}"></span>
    </li>
        `)
    })
}

export { renderCardPost, renderCategories, renderSelectedCategory }