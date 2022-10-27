import { renderCardPost, renderCategories, renderSelectedCategory } from '../../scripts/render.js'
import { categories, getSelectedCategory, getCategories } from '../../scripts/requests/categories.js'
import { storage } from '../../scripts/localStorage.js'
import { insertInLocalStorage } from '../../scripts/localStorage.js'

const redirects = document.querySelectorAll(".link")
const btsCategory = document.querySelectorAll("#category")

btsCategory.forEach((category)=>{
    console.log(category)
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
        setTimeout(()=>{
            window.location.pathname = '/src/pages/post/index.html'
        },1000)
    }
})