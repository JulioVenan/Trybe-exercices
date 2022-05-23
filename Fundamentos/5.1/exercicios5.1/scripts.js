let texto = document.getElementsByTagName("p")
for(let i = 0; i < texto.length; i += 1){
    console.log(texto[i].innerText = "Lorem Ipsum")
    texto[i].toUpperCase
}
let yellow = document.getElementsByClassName("main-content")
for(let i = 0; i <yellow.length; i += 1){
    yellow[i].style.backgroundColor = "rgb(76,164,109)"
}
let vermelho = document.getElementsByClassName("center-content")
for (let i = 0 ; i < vermelho.length; i ++){
    vermelho[i].style.backgroundColor = "white"
}
document.getElementsByTagName('h1')[0].innerText = "Exercício 5.1 - JavaScript"