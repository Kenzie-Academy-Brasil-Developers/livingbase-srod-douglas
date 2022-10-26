import url from './path.js'
console.log(url)

async function renderCardPost (){
    const response = await fetch(url)

}

function renderCategories (){
    const ul = document.querySelector("#categories")

    ul.insertAdjacentHTML("afterbegin",
    `
    
    `)
}

export { renderCardPost }