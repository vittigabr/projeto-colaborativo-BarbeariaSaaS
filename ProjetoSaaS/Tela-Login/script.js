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