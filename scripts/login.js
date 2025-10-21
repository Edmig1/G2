// LOGIN____________________________________________________________
let users = ["gabriel", "miguel"];
let passwords = ["1010", "0909"];

const esqueci = document.getElementsByClassName("esqueci")[0];
const login = document.getElementById("logintext");
const cardLog = document.getElementsByClassName("cardLog")[0];
const submit = document.getElementById("submit");

esqueci.addEventListener("click", (event) => {
    event.preventDefault();
    cardLog.style.transform = "translateX(100vw)";
    setTimeout(() => {
        window.location.href = "../front/cadastro.html";
    }, 1000);
});

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    let loginCerto = false;

    for (let i = 0; i < passwords.length; i++) {
        if (email === users[i] && senha === passwords[i]) {
            loginCerto = true;
            break;
        }
    }

    if (loginCerto) {
        console.log("certo");
        window.location.href = "../front/index.html";
    } else {
        console.log("errado");
        login.innerHTML = "Login ou senha errados";
        login.style.color = "orange";
        setTimeout(() => {
            login.innerHTML = "Faça seu Login";
            login.style.color = "white";
        }, 2000);
    }
});
