let isPurple = false;
let imageState = 0; // Variável para controlar o estado das imagens

function mudarCor() {
    const titulo = document.getElementById("titulo");

    if (isPurple) {
        titulo.style.color = "rgb(255, 192, 232)"; // Cor personalizada
    } else {
        titulo.style.color = "purple";
    }
    isPurple = !isPurple; // Alternar o estado
}

function trocarImagem() {
    const imagem = document.getElementById("images");

    if (imageState === 0) {
        imagem.src = "images/html.png"; // Caminho para a imagem HTML
        imageState = 1;
    } else if (imageState === 1) {
        imagem.src = "images/css.png"; // Caminho para a imagem CSS
        imageState = 2;
    } else {
        imagem.src = "images/js.png"; // Caminho para a imagem JS
        imageState = 0;
    }
}

function outraFuncao() {
    alert("😁😁😁😁😁😁😁😁");
}
