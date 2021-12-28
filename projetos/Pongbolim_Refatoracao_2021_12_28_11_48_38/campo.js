//Variáveis das linhas do campo

let xLateralCima= 3;
let yLateralCima = 5;
let xLateralBaixo = 3;
let yLateralBaixo = 395;


let comprimentoLinhasLaterais = 594;
let alturaLinhasLaterais = 1;

//Variáveis das linhas de fundo

//let xLinhaEsquerda = 3;
let xLinhasDeFundo = [3,597];
let yLinhasDeFundo = [6,6];

let comprimentoLinhasDeFundo = 1;
let alturaLinhasdeFundo = 388;

//Variáveis da grande área linhas horizontais

let xLinhaGrandeAreaHorizontalCima = [3,475];
let yLinhaGrandeAreaHorizontalCima = [70,70];

let xLinhaGrandeAreaHorizontalBaixo = [3,475];
let yLinhaGrandeAreaHorizontalBaixo = [330,330];

let comprimentoLinhaGrandeAreaHorizontal = 120;
let alturaLinhaGrandeAreaHorizontal = 1;

//Variáveis da grande área linhas verticais

let xLinhaGrandeAreaVertical = [125,475];
let yLinhaGrandeAreaVertical = [70,70];

let comprimentoLinhaGrandeAreaVertical = 1;
let alturaLinhaGrandeAreaVertical = 261;

//Variáveis da pequena área linhas horizontais

let xLinhaPequenaAreaHorizontalCima = [3,545];
let yLinhaPequenaAreaHorizontalCima = [110,110];

let xLinhaPequenaAreaHorizontalBaixo = [3,545];
let yLinhaPequenaAreaHorizontalBaixo = [290,290];

let comprimentoLinhaPequenaAreaHorizontal = 50;
let alturaLinhaPequenaAreaHorizontal = 1;

//Variáveis da pequena área linhas verticais

let xLinhaPequenaAreaVertical = [52,545];
let yLinhaPequenaAreaVertical = [111,111];

let comprimentoLinhaPequenaAreaVertical = 1;
let alturaLinhaPequenaAreaVertical = 180;

//Variáveis linha meio de campo

let xyLinhaMeioDeCampo = [300,6];
let comprimentoLinhaMeioDeCampo = 1;
let alturaLinhaMeioDeCampo = 388;

function mostraLinhasLateraisCampo(x,y){
  fill(255);
    rect(x,y,comprimentoLinhasLaterais,alturaLinhasLaterais);
  }

function mostraLinhasDeFundo(){
  for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhasDeFundo[i],yLinhasDeFundo[i],comprimentoLinhasDeFundo,alturaLinhasdeFundo);
  }
}

function mostraLinhasGrandeAreaHorizontalCima(){
  circle(95, 200, 5);
  for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaGrandeAreaHorizontalCima[i],yLinhaGrandeAreaHorizontalCima[i],comprimentoLinhaGrandeAreaHorizontal,alturaLinhaGrandeAreaHorizontal);
  }
}

function mostraLinhasGrandeAreaHorizontalBaixo(){
    circle(500, 200, 5);

  for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaGrandeAreaHorizontalBaixo[i],yLinhaGrandeAreaHorizontalBaixo[i],comprimentoLinhaGrandeAreaHorizontal,alturaLinhaGrandeAreaHorizontal);
  }
}

function mostraLinhasGrandeAreaVertical(){
    for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaGrandeAreaVertical[i],yLinhaGrandeAreaVertical[i],comprimentoLinhaGrandeAreaVertical,alturaLinhaGrandeAreaVertical);
  }
}

function mostraLinhasPequenaAreaHorizontalCima(){
  for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaPequenaAreaHorizontalCima[i],yLinhaPequenaAreaHorizontalCima[i],comprimentoLinhaPequenaAreaHorizontal,alturaLinhaPequenaAreaHorizontal);
  }
}

function mostraLinhasPequenaAreaHorizontalBaixo(){
  for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaPequenaAreaHorizontalBaixo[i],yLinhaPequenaAreaHorizontalBaixo[i],comprimentoLinhaPequenaAreaHorizontal,alturaLinhaPequenaAreaHorizontal);
  }
}

function mostraLinhasPequenaAreaVertical(){
    for(let i=0;i<2;i++){
    fill(255);
    rect(xLinhaPequenaAreaVertical[i],yLinhaPequenaAreaVertical[i],comprimentoLinhaPequenaAreaVertical,alturaLinhaPequenaAreaVertical);
  }
}

function mostraLinhaMeioDeCampo(){
   circle(300, 200, 6);
    noFill();
    circle(300,200,95);
        rect(xyLinhaMeioDeCampo[0],xyLinhaMeioDeCampo[1],comprimentoLinhaMeioDeCampo,alturaLinhaMeioDeCampo);
  }

function mostraArcos(){
  arc(5, 7, 40, 40, 0, HALF_PI); //arco de cima time 1
  arc(5, 395, 40, 40, 3*PI/2, 0); // arco de baixo time 1
  arc(595, 7, 40, 40, PI/2, PI );  //arco de cima time 2
  arc(595, 395, 40, 40, PI, 3*PI/2); // arco de baixo time 2
  arc(127,200,60,60,3*PI/2,PI/2); //arco da área do time 1
  arc(475,200,60,60,HALF_PI,3*PI/2); //arco da área do time 2

}