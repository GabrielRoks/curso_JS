function ePaisagem(largura, altura){
    return largura > altura;
}

const eRetrato = (largura, altura) => largura < altura;

console.log(ePaisagem(1920, 1080));

console.log(eRetrato(1080, 1920))