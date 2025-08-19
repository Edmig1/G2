
//INDEX____________________________________________________________

const menu = document.getElementById("menu")
const nav = document.getElementById("navmob")
const cont = document.getElementById("containerpop")

menu.addEventListener("click", (event) => {
    event.preventDefault()
    cont.style.display = 'flex'
    setTimeout(() => {
        cont.style.opacity = 1
        nav.style.transform = 'translateX(0vw)'
    }, 50)
})
