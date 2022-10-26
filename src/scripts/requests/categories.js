import url from '../path.js'

async function getCategories () {
    const request = await fetch(url)
    
    try{
        const page = await request.json()
 
        const news = page.news
        const category = news.map((info)=> info.category)
        return category
    }catch(err){

    }
}

const categories = await getCategories()

export default categories