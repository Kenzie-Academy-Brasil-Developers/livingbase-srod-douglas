import url from '../path.js'

export default async function getResponse (page) {

    const request = await fetch(`${url}?page=${page}`)

    try{
        
        if(request.ok){

            const response = request.json()
            return response
            
        }

    }catch(err){
        console.error(err)
    }
}