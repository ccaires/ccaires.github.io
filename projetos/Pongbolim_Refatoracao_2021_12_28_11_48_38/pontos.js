//variaveis pontos
let meusPontos =0;
let pontosOponente = 0;

function verificaColisaoGols(x,y){
  colidiu = collideRectCircle(x, y, comprimentoGol, alturaGol, xBolinha, yBolinha, raio);
  if(colidiu){
    gol.play();
    meusPontos+=1;
    xBolinha = 300;
  }
}

function verificaColisaoGolsOp(x,y){
  colidiu = collideRectCircle(x, y, comprimentoGol, alturaGol, xBolinha, yBolinha, raio);
  if(colidiu){
    gol.play();
    pontosOponente+=1;
    xBolinha = 300;
  }  
}

function incluiPlacar(){
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(color(160,82,45));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(30,144,255));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
}