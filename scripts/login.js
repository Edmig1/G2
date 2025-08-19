
//LOGIN____________________________________________________________

esqueci = document.getElementsByClassName("esqueci")[0]
cardLog = document.getElementsByClassName("cardLog")[0]
esqueci.addEventListener("click",(event)=>{
    event.preventDefault()
    cardLog.style.transform = 'translateX(100vw)'
        setTimeout(() => {
        window.location.href = "../front/cadastro.html"
    }, 1000);
})
