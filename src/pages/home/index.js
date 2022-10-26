import { renderCardPost, renderCategories, renderSelectedCategory } from '../../scripts/render.js'
import getPosts from '../../scripts/requests/posts.js'
import { categories, getSelectedCategory } from '../../scripts/requests/categories.js'

const node = renderCategories()


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