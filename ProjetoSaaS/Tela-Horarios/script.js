const bntProximo = document.getElementById('bntP')
const bntAnterior = document.getElementById('bntA')
const linkProximo = document.getElementById('linkP')
const linkAnterior = document.getElementById('linkA')
const semanas = document.querySelectorAll('.semana')
const limite = semanas.length
let contador = 1

bntProximo.addEventListener('click', proximo)
bntAnterior.addEventListener('click', anterior)

function proximo(){
    if(contador<limite){
        contador++
        linkProximo.setAttribute('href', `#semana${contador}`)
    }
}

function anterior(){
    if(contador>1){
        contador--
        linkAnterior.setAttribute('href', `#semana${contador}`)
    }
}

// Introdução das datas

// const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
// let agora = new Date()
// let dia = agora.getDate()
// let day = 1
// let month = agora.getUTCMonth()
// let mes = meses[month]
const datas = document.querySelectorAll('.dia')

// Botão selecionado
datas.forEach(botao => {
    botao.addEventListener('click', function(){
        const diaSelecionado = document.querySelector('.dia.selecionado')
        if (diaSelecionado) {
            diaSelecionado.classList.remove('selecionado')
        }
        botao.classList.add('selecionado')
    })
})

// Carrossel de datas

const meses = [
    'Jan', 'Fev', 'Mar', 'Abr',
    'Mai', 'Jun', 'Jul', 'Ago',
    'Set', 'Out', 'Nov', 'Dez'
]

const dataAtual = new Date()

datas.forEach((botao, index) => {
    const data = new Date(dataAtual)

    data.setDate(dataAtual.getDate() + index)

    const dia = data.getDate()
    const mes = meses[data.getMonth()]

    botao.setAttribute('value', `${dia}/${mes}`)
})





// let d = 0
// let m = 1
// let i = 0
// for(let c = 0; c < datas.length; c++){
//     if(month%2==0 || mes=='Ago' && dia+d<32){
//         datas[c].setAttribute('value', `${dia+d}/${mes}`)
//     }
//     else if(month%2==1 && dia+d<31){
//         datas[c].setAttribute('value', `${dia+d}/${mes}`)
//     }
//     else{
//         if((month+m)%2==0 || mes=='Ago' && dia+d<32){
//             datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
//             day++
//             if(day==32){
//                 day = 1
//                 m++
//             }
//         }
//         else{
//             datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
//             day++
//             if(day==32){
//                 day = 0
//                 m++
//             }
//         }
//     }
//     d++
// }