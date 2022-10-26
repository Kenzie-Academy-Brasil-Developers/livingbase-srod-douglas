import url from './path.js'
import categories from './requests/categories.js'
import getPosts from './requests/posts.js'



async function renderCardPost (){
    const posts = await getPosts()
    const ul = document.querySelector("#posts")

    posts.forEach((post)=>{

    ul.insertAdjacentHTML("afterbegin",
    `
    <li class="card">
        <img src="${post.image}" alt="${post.title}">
        <div class="infos">
            <h2 class="title">${post.title}</h2>
            <p class="desc">${post.description}</p>
        </div>
        <span class="link" id="${post.id}"></span>
    </li>
    `)
    })
}



function renderCategories (){
    const ul = document.querySelector("#categories")

    categories.forEach((category)=>{

        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="category">
            <p>${category}</p>
        </li>
        `)
    })
}

export { renderCardPost, renderCategories }