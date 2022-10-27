function checkLocal () {
    const local = JSON.parse(localStorage.getItem("@preferences")) || ""
    return local
}

function insertInLocalStorage (obj) {
    localStorage.setItem("@preferences", obj)
}

function setAtLocal (post) {

    post.forEach((infos)=>{

        infos.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")
            
            let pref = {
                id: event.target.id,
                category: category,
            }
            insertInLocalStorage(JSON.stringify(pref))
        }
    })
}

async function setAllNews (allNews){
    localStorage.setItem("@all-news", JSON.stringify(await allNews))
}

function newsLocalStorage () {
    const newsLocalStorage = JSON.parse(localStorage.getItem("@all-news"))
    return newsLocalStorage
}

const storage = checkLocal()

export { storage, insertInLocalStorage, setAtLocal, setAllNews, newsLocalStorage }