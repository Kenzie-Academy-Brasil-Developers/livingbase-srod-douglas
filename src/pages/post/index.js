import { renderJustPost } from '../../scripts/render.js'
import getAllCategories from '../../scripts/requests/allCategories.js'
import { renderCategories } from '../../scripts/render.js'
import { newsLocalStorage, storage } from '../../scripts/localStorage.js'


renderCategories(await getAllCategories())

renderJustPost()

const allBts = document.querySelectorAll("#category")
const btHome = document.querySelector("#btHome")
const linkHome = btHome.dataset.path

btHome.onclick = (event) => {
    
    event.preventDefault()

    const categoryPreference = storage.category
    let allNewsAtLocal = newsLocalStorage()
    
    let filtered = []

    allNewsAtLocal.forEach((obj) =>{

        let category = obj.category.toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

        if(category == categoryPreference){

            filtered.push(obj)

        }
        localStorage.setItem("@preference at home", JSON.stringify(filtered))
        localStorage.removeItem("@preferences at post")
        window.location.replace(linkHome)
    })
}

allBts.forEach((bt)=>{
            
    bt.addEventListener("click", event =>{

        let filterCategories = []
        const list = newsLocalStorage()
        
        list.forEach((obj)=>{

        if(obj.category == event.target.innerText){

            filterCategories.push(obj)

        }
    })
    window.location.replace(linkHome)
    localStorage.setItem("@preferences at post", JSON.stringify(filterCategories))
    })
})