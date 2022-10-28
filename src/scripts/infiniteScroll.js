import getResponse from './requests/response.js'
import { renderScroll } from './render.js'

const btAll = document.querySelector(".all")

let page = 0

if(btAll !== null){

    btAll.onclick = () => {

        localStorage.removeItem("@preferences at post")
        localStorage.removeItem("@preference at home")

    }
}

async function checkScroll (alert) {

    let response = await getResponse(page)

    if(alert == "home"){

        window.location.replace('../../index.html')

    }else{

        if(alert == "selected"){
    
            response = false
    
        }
    
        if(response.nextPage <= 3){
    
            await renderScroll(page)

            page++
    
        }
    }
}

const observer = new IntersectionObserver((entries) => {
    if(entries.some(entry => entry.isIntersecting)){
        checkScroll()
    }
})

export { checkScroll, observer, page }