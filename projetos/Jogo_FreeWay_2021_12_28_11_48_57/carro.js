//variáveis dos carros

//let xPosicaoCarro = 600;
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150, 210, 270, 318];
//let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let velocidadeCarros = [7, 8.5, 8.2, 10, 7.3, 9.3];
let alturaLarguraCarros = [50,40];

//Carro 1
let xCarro1 = 600; //Esse valor faz com que o carro saia da tela inicial e na função do movimentaCarro ele vai descendo a posição x dele, fazendo ele se movimentar.
//let larguraCarro = 50;
//let alturaCarro = 40;

//Carro 2

//Carro 3

function mostraCarro(){
 for(let i=0;i<imgCarros.length;i++){
   image(imgCarros[i], xCarros[i], yCarros[i], alturaLarguraCarros[0],alturaLarguraCarros[1]);
 }
}

function movimentaCarro(){
  for(let i=0;i<imgCarros.length;i++){
    xCarros[i] -= velocidadeCarros[i];
  }  
}

function voltaPosicaoInicialCarro(){
  for(let i=0;i<xCarros.length;i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }  
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}