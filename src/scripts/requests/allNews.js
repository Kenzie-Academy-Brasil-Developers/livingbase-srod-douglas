import { getPosts } from './posts.js'

async function getAllNews () {

    let newsZero = await getPosts(0)
    let newsOne = await getPosts(1)
    let newsTwo = await getPosts(2)

    let allNews = [...newsZero, ...newsOne, ...newsTwo]

    return allNews

}

export default getAllNews