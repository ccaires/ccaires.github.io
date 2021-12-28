//variáveis do ator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 30, 30); //Parâmetros: imagem a ser carregada, posição x, posição y, largura da imagem, altura da imagem)
  }

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yAtor += 3;
    }
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao(){
  for(let i=0;i<imgCarros.length;i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i], alturaLarguraCarros[0],alturaLarguraCarros[1], xAtor + 15, yAtor + 15, 20);
    if(colisao){
      voltaAtorParaPosicaoInicial();  //chama uma função colidiu, criada abaixo
      somColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos-=1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor=366;
}

function pontosMaiorQueZero(){ //Para diminuir pontos na colisão caso maior que zero.
  return meusPontos > 0;
}

function incluiPontos(){
  fill(color(255,240,0));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if (yAtor<15){ //o valor 15 é referente ao ator chegar ao topo
    somPonto.play();
    meusPontos+=1;
    voltaAtorParaPosicaoInicial();
  }
}

function podeMover(){ //limitar ator na tela para não sumir do eixo y
  return yAtor<366;
}