import { renderCardPost, renderCategories, renderSelectedCategory } from '../../scripts/render.js'
import { insertInLocalStorage, newsLocalStorage, setAllNews, checkPreferencesFromPost, storage } from '../../scripts/localStorage.js'
import getAllCategories from '../../scripts/requests/allCategories.js'
import getAllNews from '../../scripts/requests/allNews.js'
import { checkScroll } from '../../scripts/infiniteScroll.js'

const verifyLocalFromPost = checkPreferencesFromPost()


if(verifyLocalFromPost.length > 0){

    renderSelectedCategory(verifyLocalFromPost)
    renderCategories(await getAllCategories())

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
                
                checkScroll("selected")
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

}else{

    if(storage !== ""){

        renderSelectedCategory(storage)
        renderCategories(await getAllCategories())
        localStorage.removeItem("@preference at home")

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
            
                    checkScroll("selected")
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

    }else{

    setAllNews(await getAllNews())
    renderCategories(await getAllCategories())
    checkScroll()
    
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
}
}

setTimeout(()=>{
    let div = document.querySelector("#observed")
    div.classList.remove("hide")

},2000)