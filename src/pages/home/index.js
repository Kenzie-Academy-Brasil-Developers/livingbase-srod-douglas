import { renderCardPost, renderCategories, renderSelectedCategory } from '../../scripts/render.js'
import getPosts from '../../scripts/requests/posts.js'
import { categories, getSelectedCategory } from '../../scripts/requests/categories.js'
import { storage } from '../../scripts/localStorage.js'
import { insertInLocalStorage } from '../../scripts/localStorage.js'

const node = renderCategories()
const redirects = document.querySelectorAll(".link")

node.forEach((category)=>{

    category.onclick = async () =>{
        let ul = document.querySelector("#posts")
        ul.innerHTML = ""
        let selected = await category.innerText
        if(selected == "Todos"){
            renderCardPost()
        }else{
            await getSelectedCategory(selected)
        }
    }
})

redirects.forEach((choice)=>{

    choice.onclick = (event) =>{
        let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")
        let pref = {
            id: event.target.id,
            category: `${category}`,
        }
        insertInLocalStorage(JSON.stringify(pref))

    }
})