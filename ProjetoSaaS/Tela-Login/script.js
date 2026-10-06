const email = document.getElementById('email')
const senha = document.getElementById('senha')
const entrar = document.getElementById('bntEntrar')
let alerta = document.getElementById('alerta')

entrar.addEventListener('click', autentificacao)

function autentificacao(){
    if(email.value==''){
        alerta.innerHTML = 'Preencha os dados corretamente'
        entrar.removeAttribute('href')
    }
    else if(senha.value==''){
        alerta.innerHTML = 'Preencha os dados corretamente'
        entrar.removeAttribute('href')
    }
    else{
        entrar.setAttribute('href', '../Tela-Cadastro-Feito/cadastro-feito.html')
    }
}

// Mostrar Senha e ocultar Senha
const botao = document.getElementById('mostrar');

botao.addEventListener("click",  () =>{
    if(senha.type === "password"){
        senha.type = "text";
    } else {
        senha.type = "password"
    }
});
