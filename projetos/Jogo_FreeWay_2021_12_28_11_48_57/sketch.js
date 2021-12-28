function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() { //função draw que desenha os objetos na tela
  background(imgEstrada); //mostrar a imagem
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


