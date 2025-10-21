
//INDEX____________________________________________________________

const menu = document.getElementById("menu")
const nav = document.getElementById("navmob")
const cont = document.getElementById("containerpop")
const x = document.getElementById("x")

menu.addEventListener("click", (event) => {
    event.preventDefault()
    cont.style.display = 'flex'
    setTimeout(() => {
        cont.style.opacity = 1
        nav.style.transform = 'translateX(0vw)'
    }, 50)
})

x.addEventListener("click",() =>{
    cont.style.opacity = 0
    nav.style.transform = 'translateX(-100vw)'
        setTimeout(() => {
            cont.style.display = 'none'
    }, 1000)
})
