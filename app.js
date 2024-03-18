/*let titulo= document.querySelector('h1')
titulo.innerHTML='Jogo do número secreto'

let paragrafo= document.querySelector('p')
paragrafo.innerHTML='Escolha um numero entre 1 e 10'

*/
let listaNumerosSorteados=[]
mensagemIncial()
let numeroSort = aleatorio()
let tentativas = 1
let numero
function aleatorio() {
    let numeroEscolhido=parseInt(Math.random() * 10 + 1)
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return aleatorio();    
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function mensagemIncial(){
    exibirNaTela('h1', 'Jogo do número secreto')
    exibirNaTela('p', 'Escolha um numero entre 1 e 10')
}


function verificarChute() {
    numero = document.querySelector('input').value
    if (numero == numeroSort) {
        let frase = `Você descobriu o número secreto! Precisou de ${tentativas} tentativa(s)`
        exibirNaTela('h1', 'Acertou!')
        exibirNaTela('p', frase)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        numero > numeroSort ? exibirNaTela('h1', 'O número secreto é menor') : exibirNaTela('h1', 'O número secreto é maior')
        limpaTela()
    }
    tentativas++
}
function limpaTela() {
    numero = document.querySelector('input')
    numero.value = ''
}

function reiniciarJogo() {
    mensagemIncial()
    limpaTela()
    tentativas = 1
    numeroSort = aleatorio()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
