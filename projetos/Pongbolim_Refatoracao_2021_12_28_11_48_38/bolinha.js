//variavéis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha() {
  fill(color(255));
  circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  xBolinha -= velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}
