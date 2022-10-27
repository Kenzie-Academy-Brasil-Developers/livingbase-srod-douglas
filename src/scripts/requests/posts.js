import url from "../path.js";
import { storage } from '../localStorage.js'


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


async function dataPagePost () {

    const local = storage
    const idPost = local.id
    const request = await fetch(`${url}/${idPost}`)

    try{
        const response = await request.json()

        if(request.ok){
            return response
        }
    }catch(err){
        console.error(err)
    }
}


export { getPosts, dataPagePost }