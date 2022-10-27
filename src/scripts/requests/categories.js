import { renderCardPost, renderCategories, renderSelectedCategory } from '../render.js'
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
        
    }
}

let pageZero = await getCategories(0)

let pageOne = await getCategories(1)

let allCategories = [...pageZero, ...pageOne]

let categoriesNotRepeat = new Set (allCategories)
allCategories = Array.from(categoriesNotRepeat)
renderCategories(allCategories)

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
    
const categories = allCategories
const selectedCategory = await getSelectedCategory()

export { categories, selectedCategory, getSelectedCategory, getCategories, renderCategories, allCategories }