//variáveis dos times
let xPosZagueiroAtacanteTime1 = [55,487];
let yPosZagueiroAtacanteTime1 = [150,200];

let xPosZagueiroAtacanteTime2 = [550,102];
let yPosZagueiroAtacanteTime2 = [150,200];

let qtdJogadores = xPosZagueiroAtacanteTime1.length;

let comprimentoJogadores = 8;
let alturaJogadores = 40;

//let velocidadeZagueiroTime;


function mostraTimes(){
  for(let i=0;i<qtdJogadores;i++){
    fill(color(160,82,45));
    rect(xPosZagueiroAtacanteTime1[i],yPosZagueiroAtacanteTime1[i],comprimentoJogadores,alturaJogadores);
    fill(color(30,144,255));
    rect(xPosZagueiroAtacanteTime2[i],yPosZagueiroAtacanteTime2[i],comprimentoJogadores,alturaJogadores);
  }
}

//Movimenta jogadores do time 1 com as teclas w-s
function movimentaJogadoresTime1(){
  for(let i=0; i<2;i++){
    if (keyIsDown(87)) {
      yPosZagueiroAtacanteTime1[i]-=4;
      }
    if (keyIsDown(83)) {
      yPosZagueiroAtacanteTime1[i]+=4;
      }
    }
}
  
//Movimenta jogadores do time 2 com as teclas Up-Down
function movimentaJogadoresTime2(){
  for(let i=0; i<2;i++){
    if(keyIsDown(DOWN_ARROW)){
      yPosZagueiroAtacanteTime2[i]+=4;
    }
     if(keyIsDown(UP_ARROW)){
      yPosZagueiroAtacanteTime2[i]-=4;
    }
  }
}


//Verifica colisão com jogadores
function verificaColisaoJogadoresTime1(){
  for(let i=0;i<xPosZagueiroAtacanteTime1.length;i++){
    colisao = collideRectCircle(xPosZagueiroAtacanteTime1[i],yPosZagueiroAtacanteTime1[i], comprimentoJogadores,alturaJogadores, xBolinha+5, yBolinha+5, raio);
    if(colisao){
      velocidadeXBolinha*=-1;
    }
  }
}

function verificaColisaoJogadoresTime2(){
  for(let i=0;i<xPosZagueiroAtacanteTime1.length;i++){
    colisao = collideRectCircle(xPosZagueiroAtacanteTime2[i],yPosZagueiroAtacanteTime2[i], comprimentoJogadores,alturaJogadores,xBolinha+5,yBolinha+5,raio);
    if(colisao){
      velocidadeXBolinha*=-1;  
     }
  }
}



// Movimenta jogadores automaticamente
/*
function movimentaJogadoresTime1(){
  for(let i=0;i<qtdJogadores;i++){
  velocidadeZagueiroTime1 = yBolinha - yPosZagueiroAtacanteTime1[i] - comprimentoJogadores / 2 - 24;
  yPosZagueiroAtacanteTime1[i] += velocidadeZagueiroTime1;
  }
}

function movimentaJogadoresTime2(){
  for(let i=0;i<qtdJogadores;i++){
  velocidadeZagueiroTime2 = yBolinha - yPosZagueiroAtacanteTime2[i] - comprimentoJogadores / 2 - 65;
  yPosZagueiroAtacanteTime2[i] += velocidadeZagueiroTime2;
  }
}
*/