import { renderCardPost, renderCategories, renderSelectedCategory } from '../render.js'
import url from '../path.js'
import { getPosts } from './posts.js'

async function getCategories (count) {
    const request = await fetch(`${url}?page=${count}`)
    
    try{
        const page = await request.json()
        
        const news = page.news
        let category = news.map((info)=> info.category)
        const categoriesNotRepeat = new Set(category)
        category = Array.from(categoriesNotRepeat)
        
        return category
        
    }catch(err){
        console.error(err)
    }
}





/* renderCategories(allCategories) */






/* async function getSelectedCategory (category){

    if(category !== undefined){
        
    let endPoint = category.toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

    const request = await fetch(`${url}?category=${endPoint}`,{
        method: "GET",
    })

    try{
        const data = await request.json()

        if(request.ok){

            data.news.forEach((post)=>{
                let end = post.category.toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")
                if(endPoint == end){
                    
                    renderSelectedCategory([post])
                }
            })
        }
    }catch(err){
        console.error(err)
    }
    }else{
        await renderCardPost()
    }
} */
    

/* const selectedCategory = await getSelectedCategory() */

export { /* selectedCategory */ /* getSelectedCategory */ renderCategories, getCategories }