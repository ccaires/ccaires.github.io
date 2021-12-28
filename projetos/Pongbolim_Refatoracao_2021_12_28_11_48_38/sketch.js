//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;


function preload(){
  //trilha=loadSound("trilha.mp3");
  //ponto=loadSound("ponto.mp3");
  //raquetada=loadSound("raquetada.mp3");
  trilha=loadSound("sons/som-trilha.mp3");
  chute=loadSound("sons/som-chute.mp3");
  gol=loadSound("sons/som-gol.mp3");
  apito=loadSound("sons/som-comecou.mp3");

}

function setup() {
  createCanvas(600, 400);
  apito.play();
  trilha.loop();
}

function draw() {
  background(0,100,0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraGolTime(xGolTime1,yGolTime1);
  mostraGolTime(xGolTime2,yGolTime2);
  verificaColisaoGols(xGolTime2, yGolTime2);
  //verificaColisaoGolsOp(xGolRaquete, yGolRaquete);
  verificaColisaoGolsOp(xGolTime1, yGolTime1);
  incluiPlacar();
  mostraTimes();
  movimentaJogadoresTime1();
  movimentaJogadoresTime2();
  mostraLinhasLateraisCampo(xLateralCima,yLateralCima);
  mostraLinhasLateraisCampo(xLateralBaixo,yLateralBaixo);
  mostraLinhasDeFundo();
  mostraLinhasGrandeAreaHorizontalCima();
  mostraLinhasGrandeAreaHorizontalBaixo();
  mostraLinhasGrandeAreaVertical();
  mostraLinhasPequenaAreaHorizontalCima();
  mostraLinhasPequenaAreaHorizontalBaixo();
  mostraLinhasPequenaAreaVertical();
  mostraLinhaMeioDeCampo();
  mostraArcos();
  verificaColisaoJogadoresTime1();
  verificaColisaoJogadoresTime2();
}

function verificaColisaoBorda(){
   if (xBolinha + raio> width || xBolinha - raio <0){
    velocidadeXBolinha*= -1;
  }
   if (yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha*= -1;
  }
}



