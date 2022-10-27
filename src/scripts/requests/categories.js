import { renderCategories } from '../render.js'
import url from '../path.js'

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

export { renderCategories, getCategories }