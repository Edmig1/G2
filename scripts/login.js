//CADASTRO_____________________________________________

const submitcadastro = document.getElementById("submitcadastro");

if (submitcadastro) {
    submitcadastro.addEventListener("click", (event) => {
        event.preventDefault();

        const emailcadastro = document.getElementById("emailcadastro").value;
        const senhacadastro = document.getElementById("senhacadastro").value;

        // Atualiza com dados mais recentes do localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

        users.push(emailcadastro);
        passwords.push(senhacadastro);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("passwords", JSON.stringify(passwords));

        console.log("Usuário cadastrado com sucesso!");
    });
}



// LOGIN____________________________________________________________

const esqueci = document.getElementsByClassName("esqueci")[0];
const login = document.getElementById("logintext");
const cardLog = document.getElementsByClassName("cardLog")[0];
const submit = document.getElementById("submit");


if (submit) {
    submit.addEventListener("click", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        let users = JSON.parse(localStorage.getItem("users"));
        let passwords = JSON.parse(localStorage.getItem("passwords"));
        for(i=0; i< users.length; i++){
            if(users[i] ==email && passwords[i] == senha){
                window.location.href = "../front/index.html";
            }
        }


    });
}