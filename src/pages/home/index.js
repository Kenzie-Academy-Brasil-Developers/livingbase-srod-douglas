import { renderCardPost, renderCategories, renderSelectedCategory } from '../../scripts/render.js'
import { insertInLocalStorage, newsLocalStorage, setAllNews } from '../../scripts/localStorage.js'
import getAllCategories from '../../scripts/requests/allCategories.js'
import getAllNews from '../../scripts/requests/allNews.js'

setAllNews(await getAllNews())
renderCategories(await getAllCategories())
renderCardPost(await getAllNews())


setTimeout(() => {
    const redirects = document.querySelectorAll(".link")
    const btsCategory = document.querySelectorAll("#category")

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

    btsCategory.forEach((category)=>{
            
        category.addEventListener("click", event =>{
    
            let filterCategories = []
            const list = newsLocalStorage()
            if(event.target.innerText == "Todos"){
                renderCardPost()
            }else{
    
                list.forEach((obj)=>{
                    if(obj.category == event.target.innerText){
    
                        filterCategories.push(obj)
                    }
                })
            }
                renderSelectedCategory(filterCategories)
        })
    })
}, 1000);