import url from "../path.js";

async function getPosts (){
    const request = await fetch(url)

    try{

        const response = await request.json()
        const news = await response.news

        return news

    }catch(err){
        console.error(err)
    }
}

export default getPosts