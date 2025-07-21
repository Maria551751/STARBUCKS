let circulo = document.querySelector(".circulo");
let span = document.querySelector("span")
let imagem = document.querySelector(".Starbucks")



function trocarCor(cor) {
 circulo.style.background = cor
 span.style.color = cor
 
}
function trocarImagem(img) {
    imagem.src = img
}
