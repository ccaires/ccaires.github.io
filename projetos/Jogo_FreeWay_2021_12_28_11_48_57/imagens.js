//Imagens do jogo e Sons

let imgEstrada;
let imgAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;

let somTrilha;
let somColisao;
let somPonto;


function preload(){ //carregar a imagem
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator-1.png");
  imgCarro1 = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarros = [imgCarro1, imgCarro2, imgCarro3,imgCarro1,imgCarro2,imgCarro3];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}

