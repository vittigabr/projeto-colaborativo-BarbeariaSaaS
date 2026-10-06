const bntP = document.getElementById('bntP')
const bntA = document.getElementById('bntA')
let linkP = document.getElementById('linkP')
let linkA = document.getElementById('linkA')
const semanas = document.querySelectorAll('.semana')
let limite = semanas.length
let contador = 1

bntP.addEventListener('click', proximo)
bntA.addEventListener('click', anterior)

function proximo(){
    if(contador<limite){
        contador++
        linkP.setAttribute('href', `#semana${contador}`)
    }
}

function anterior(){
    if(contador>1){
        contador--
        linkA.setAttribute('href', `#semana${contador}`)
    }
}

// Introdução das datas
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
let agora = new Date()
let dia = agora.getDate()
let day = 1
let month = agora.getUTCMonth()
let mes = meses[month]
const datas = document.querySelectorAll('.dia')

// Botão selecionado
datas.forEach((botao, index) => {
    botao.addEventListener('click', function(){
        const diaSelecionado = document.querySelector('.dia.selecionado')
        console.log('amendoim')
        diaSelecionado.classList.remove('selecionado')
        botao.classList.add('selecionado')
    })
})

// Carrossel de datas
let d = 0
let m = 1
let i = 0
for(let c = 0; c<=datas.length; c++){
    if(month%2==0 || mes=='Ago' && dia+d<32){
        datas[c].setAttribute('value', `${dia+d}/${mes}`)
    }
    else if(month%2==1 && dia+d<31){
        datas[c].setAttribute('value', `${dia+d}/${mes}`)
    }
    else{
        if((month+m)%2==0 || mes=='Ago' && dia+d<32){
            datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
            day++
            if(day==32){
                day = 1
                m++
            }
        }
        else{
            datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
            day++
            if(day==32){
                day = 0
                m++
            }
        }
    }
    d++
}