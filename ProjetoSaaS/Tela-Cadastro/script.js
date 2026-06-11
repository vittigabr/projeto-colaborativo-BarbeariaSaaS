const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const senha = document.getElementById('senha')
const confSenha = document.getElementById('confirmacaoSenha')
const termos = document.getElementById('termos')
const cadastrar = document.getElementById('cadastrar')
let alerta = document.getElementById('alerta')

cadastrar.addEventListener('click', autentificacao)

function autentificacao(){
    if(email.value=='' || senha.value=='' || confSenha.value=='' || telefone.value=='' || nome.value=='' || termos.checked == false){
        alerta.innerHTML = 'Preencha os dados corretamente'
        cadastrar.removeAttribute('href')
    }
    else{
        cadastrar.setAttribute('href', '../Tela-Login/login.html')
    }
}