//variavéis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 3;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let comprimentoRaqueteOponente = 10;
let alturaRaqueteOponente = 90;
let velocidadeYOponente;
let chanceDeErrar = 0;

//variaveis pontos
let meusPontos =0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquetes(xRaquete,yRaquete);
  verificaColisaoRaquetes(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  //colisaoRaqueteOponenteBiblioteca();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
    circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoBorda(){
   if (xBolinha + raio> width || xBolinha - raio <0){
    velocidadeXBolinha*= -1;
  }
  
   if (yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha*= -1;
  }
}

function mostraRaquete(x,y){
    rect(x,y,comprimentoRaquete,alturaRaquete)
}

/*
function mostraRaqueteOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,comprimentoRaqueteOponente,alturaRaqueteOponente)

}*/

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete-=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete+=10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete+comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquetes(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

/*
function colisaoRaqueteOponenteBiblioteca(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}*/

/*
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaqueteOponente / 2 -75;
  yRaqueteOponente += velocidadeYOponente;
}*/

//Testando código de chances de errar do oponente
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - comprimentoRaqueteOponente / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function incluiPlacar(){
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
}

function marcaPonto(){
  if(xBolinha>590){
    meusPontos+=1;
    ponto.play();
  }
  if(xBolinha<10){
    pontosOponente+=1;
    ponto.play();
  }
}