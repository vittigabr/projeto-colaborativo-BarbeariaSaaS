const email = document.getElementById('email')
const senha = document.getElementById('senha')
const entrar = document.getElementById('bntEntrar')
const alerta = document.getElementById('alerta')

entrar.addEventListener('click', autentificacao)

function autentificacao(){
    if(email.value=='' && senha.value==''){
        alerta.innerHTML = 'Preencha os dados corretamente'
        entrar.removeAttribute('href')
    }
    else{
        if(email.value == 'cliente@gmail.com' && senha.value == '1234'){
            entrar.setAttribute('href', '../Tela-Cadastro-Feito/cadastro-feito.html')
            email.value = ''
            senha.value = ''
        }
        else if(email.value == 'admin@gmail.com' && senha.value == '1234'){
            entrar.setAttribute('href', '../Tela-Painel-Adm/painel-admin.html')
            email.value = ''
            senha.value = ''
        }
        else if(email.value == 'funcionario@gmail.com' && senha.value == '1234'){
            entrar.setAttribute('href', '../Tela-Painel-Funcionario/painel-funcionario.html')
            email.value = ''
            senha.value = ''
        }
        else{
            alerta.innerHTML = 'Este usuario não existe'
            entrar.removeAttribute('href')
        }
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