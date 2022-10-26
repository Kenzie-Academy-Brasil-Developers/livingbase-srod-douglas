import { renderCardPost, renderSelectedCategory } from '../render.js'
import url from '../path.js'

async function getCategories () {
    const request = await fetch(`${url}?page=0`)

    try{
        const page = await request.json()

        const news = page.news
        let category = news.map((info)=> info.category)
        const categoriesNotRepeat = new Set(category)
        category = Array.from(categoriesNotRepeat)

        return category
        
    }catch(err){

    }
}

async function getSelectedCategory (category){

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
}
    
const categories = await getCategories()
const selectedCategory = await getSelectedCategory()

export { categories, selectedCategory, getSelectedCategory }