let preloader = document.getElementsByClassName("preloader")[0]
let preImg = document.getElementsByClassName("pre-img")[0]
let body = document.getElementsByTagName("body")[0]
let loader = document.getElementsByClassName("loader")[0]
let bars = document.getElementsByClassName("bar")
let container = document.getElementsByClassName("container")[0]


let container2 = document.getElementsByClassName("container-2")[0]
let animationDelay = 0.05
let totalTime = 0

window.onload = ()=>{
    container.style.display = "none"
    // body.style.overflow = "hidden"
    preloader.style.animation = "slideBar 1s ease 1.5s"
    container2.style.display = "none"
    setTimeout(()=>{
        preImg.style.animation = "none"
    }, 2000)
    // window.scroll(0,0)
}

setTimeout(()=>{
    preloader.style.display = "none"
    preImg.style.animation = "none"
    container2.style.display = "block"
}, 2500)

setTimeout(()=>{

    for(let i = 0; i<bars.length; i++){
        bars[i].style.animation = `slideDown 1s ease-out ${animationDelay*i}s`
        totalTime += animationDelay*i
        container.style.display = "block"
    }
}, 1500)

setTimeout(()=>{
    loader.style.transition = "none"
    loader.style.height = "100vh"
    loader.style.backgroundColor = "#001616"
}, 2700)