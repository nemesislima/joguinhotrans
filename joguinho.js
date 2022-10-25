//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 21;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 
let velocidadeYOponente = 6;

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(219,112,147);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquetes(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquetes(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  } 
  
  if (yBolinha + raio> height || yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquetes(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255,192,203);
  textSize(16);
  textAlign(CENTER);
  fill(color(255,192,203));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,192,203));
  rect(450, 10, 40, 20);
  fill(255);
  text (pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha+raio > width){
    meusPontos += 1;
  }
  if (xBolinha-raio < 0){
    pontosDoOponente += 1;
  }
}
