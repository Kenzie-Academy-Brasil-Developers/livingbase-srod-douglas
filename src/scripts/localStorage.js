function checkLocal () {
    const local = JSON.parse(localStorage.getItem("@preferences")) || ""
    return local
}

function insertInLocalStorage (obj) {
    localStorage.setItem("@preferences", obj)
}

const storage = checkLocal()
export { storage, insertInLocalStorage }
