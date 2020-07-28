function preload() {
  fundo1 = loadImage('fundo1.png');
  fundo2 = loadImage('fundo2.png');
  menu1 = loadImage('menu1.png');
  personagem = loadImage('personagem.png');
  eazul = loadImage('eazul.png');
  eamarelo = loadImage('eamarelo.png');
  eazulclaro = loadImage('eazulclaro.png');
  erosa = loadImage('erosa.png');
  everde = loadImage('everde.png');
  evermelho = loadImage('evermelho.png');
  ebranco = loadImage('ebranco.png');
  elaranja = loadImage('elaranja.png');
  lose = loadImage('lose.png');
  happy = loadImage('happy.png');
  intro = loadImage('intro.png');
  cred = loadImage('cred.png');
  fas1 = loadImage('fas1.png');
  fas2 = loadImage('fas2.png');
  fas3 = loadImage('fas3.png');
  fas4 = loadImage('fas4.png');
  fas5 = loadImage('fas5.png');
  fas6 = loadImage('fas6.png');
  fas7 = loadImage('fas7.png');
  fas8 = loadImage('fas8.png');
  
  
  soundFormats('mp3');
  colisao1 = loadSound('colisao1.mp3');
  colisao2 = loadSound('colisao2.mp3');
  music = loadSound('music.mp3');
  press = loadSound('press.mp3');
  
}

//IMAGENS
var fundo;
var menu1;
var personagem;
var eazul;
var eamarelo;
var eazulclaro;
var erosa;
var everde;
var evermelho;
var ebranco;
var elaranja;

//SONS

var colisao1;
var colisao2;
var music;
var press;

//TELAS

var att = 0;
var temp = 0;

// MENU
var x = 350;
var y = 200;
var opcao = 1;
var tela = 0;
var xz = 350;
var yz = 200;

// GAME

var vidas = 2;
var pontos = 0;

// PERSONAGEM
var r = 22;
var n = 200;
var m = 500;

// OVOS

//AZUL
var xB = [];
var yB = [];
var vB = [];
var rB = 15;

// AMARELO

var xY = [];
var yY = [];
var vY = [];
var rY = 15;

// AZUL CLARO

var xA = [];
var yA = [];
var vA = [];
var rA = 15;

// ROSA

var xP = [];
var yP = [];
var vP = [];
var rP = 15;

// VERDE

var xG = [];
var yG = [];
var vG = [];
var rG = 15;

//VERMELHO

var xR = [];
var yR = [];
var vR = [];
var rR = 15;

//BRANCO

var xW = [];
var yW = [];
var vW = [];
var rW = 15;

//LARANJA

var xL = [];
var yL = [];
var vL = [];
var rL = 15;

var qntd = 2;


function setup() {
  createCanvas(1200, 600);
    music.play();
 // AZUL
 
    for(B=0; B<qntd; B++){
    
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,2);
    }
    
 // AMARELO
 
    for(Y=0; Y<qntd; Y++){
    
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    }
    
    // AZUL CLARO
    
    for(A=0; A<qntd; A++){
      
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    }
    
    // ROSA
    
    for(P=0; P<qntd; P++){
      
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
    }
    
    // VERDE
    
    for(G=0; G<qntd; G++){
      
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    }
    
    // VERMELHO
    
    for(R=0; R<qntd; R++){
      
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    }
    // BRANCO
 
    for(W=0; W<qntd; W++){
    
    xW[W]= random(250, 850);
    yW[W] = 0;
    vW[W] = random(1,2);
    }
    
    // BRANCO
 
    for(L=0; L<qntd; L++){
    
    xL[L]= random(250, 850);
    yL[L] = 0;
    vL[L] = random(1,2);
    }
}

function draw() {
  background(220);
  if(tela==0){
     background(menu1);
   menu();
    }
  if(tela==1){
    background(fundo1);
    fase1();
    att = att + 1;
    temp = parseInt(att/60);
    }
    if(tela==2){
    background(intro);
    instrucoes();
    }
    if(tela==3){
    background(cred);
    creditos();
    }
    if(tela==4){
    background(fundo1);
    fase2();
    att = att + 1;
    temp = parseInt(att/60);
  }
  if(tela==5) {
    background(fundo1);
    fase3(); 
    att = att + 1;
    temp = parseInt(att/60);
  }
  if(tela==6){
    background(fundo1);
    fase4();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==7){
    background(fundo1);
    fase41();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==8){
    background(fundo1);
    fase5();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==9){
    background(fundo1);
    fase5i();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==10){
    background(fundo1);
    fase5ii();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==11){
    background(fundo2);
    fase6();
    att = att + 1;
    temp = parseInt(att/60);
  }
      if(tela==12){
    background(fundo2);
    fase7();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==13){
    background(fundo2);
    fase7i();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==14){
    background(fundo2);
    fase8();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==15){
    background(fundo2);
    fase8i();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==16){
    background(fundo2);
    fase8ii();
    att = att + 1;
    temp = parseInt(att/60);
  }
    if(tela==17){
    background(lose);
    derrota();
  }
    if(tela==18){
    background(happy);
    vitoria();
  }
}

// MENU

function menu(){
  if(keyIsDown(ENTER)){
      tela = 1;
      vidas = 2;
      pontos = 0;
      temp = 0;
      att = 0;
      press.play();
    }
      if(keyIsDown(UP_ARROW)){
      tela = 2;
      press.play();
    }
    if(keyIsDown(DOWN_ARROW)){
      tela = 3;
      press.play();
    }
}

function fase1(){

// PERSONAGEM

if(temp<2){
       image(fas1, 380, 200);
}
    if(temp>=2){
  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<150){
    n+= 6;
  }

  // CORES
  
// AZUL
 
  for(B=0; B<qntd; B++){
  
  image(eazul, xB[B], yB[B], 2*rB, 2*rB);
  
    yB[B] = yB[B] + vB[B];
    
      if(yB[B] > 700){
      xB[B] = random(250, 850);
      yB[B] = 0;
      vB[B] = random(1,2);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }
  
// COLISÃO 

// COLISÃO AZUL - PERSONAGEM
  
  for(B=0; B<qntd; B++){
   if(dist( n, m, xB[B], yB[B])<r+rB){
     
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,2);
      
      pontos = pontos + 10;
      colisao1.play();
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    }
    }

//JOGO - CONDIÇÃO FASE 1
  
  fill(200, 30, 40);
  textSize(40)

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 20){
 
 tela = 4;
 vidas = 2;
 pontos = 0;
 att = 0;
 temp = 0;
 }

// OBJETIVO
   
  image(eazul, 60, 120);
  image(eazul, 100, 120);

}

// FASE 2
function fase2() {
  
  if(temp<2){
       image(fas2, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM
  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// AZUL
 
  for(B=0; B<qntd; B++){
  
  image(eazul, xB[B], yB[B], 2*rB, 2*rB);
  
    yB[B] = yB[B] + vB[B];
    
      if(yB[B] > 700){
      xB[B] = random(250, 850);
      yB[B] = 0;
      vB[B] = random(1,2);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2);
    }
}
  
// COLISÃO 

// COLISÃO AZUL - PERSONAGEM
  
  for(B=0; B<qntd; B++){
   if(dist( n, m, xB[B], yB[B])<r+rB){
     
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,2);
      
      vidas = vidas - 1;
      colisao2.play();
    
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
    pontos = pontos + 10;
    colisao1.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    }
  }

//JOGO - CONDIÇÃO FASE 2

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
    tela = 17; 
} 
 if(pontos == 30){
 
 tela = 5;
 vidas = 2;
 pontos = 0;
 att = 0;
 temp = 0;
}

// OBJETIVO
   
  image(eamarelo, 40, 120);
  image(eamarelo, 80, 120);
  image(eamarelo, 120, 120);
}

function fase3() {

    if(temp<2){
       image(fas3, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2);
    }
}
  
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
  pontos = pontos + 10;  
  colisao1.play();
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    }
 }
//JOGO - CONDIÇÃO FASE 3

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 30){
 
 tela = 6;
 pontos = 0;
 vidas = 2;
 temp = 0;
 att = 0;
 }

// OBJETIVO
   
  image(erosa, 40, 120);
  image(erosa, 80, 120);
  image(erosa, 120, 120);
}

function fase4() {

    if(temp<2){
       image(fas4, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2.5);
    }
}

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<1; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
  pontos = pontos + 10;
  colisao1.play();
     }   
  }
  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
  vidas = vidas - 1;
    colisao2.play();
     }  
    }
 }
//JOGO - CONDIÇÃO FASE 4

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 10){
 
 tela = 7;
 }
 
 // OBJETIVO
  
  image(everde, 40, 120);
  image(everde, 80, 120);
  image(eazulclaro, 120, 120 )
}

function fase41() {

 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2.5);
    }
}

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }   
  }
  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
  pontos = pontos + 10;
  colisao1.play();
    
     }  
 }
//JOGO - CONDIÇÃO FASE 41

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);

if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 30){
 
 tela = 8;
 vidas = 2;
 pontos = 0;
 temp = 0;
 att = 0;
 }

// OBJETIVO
   
  image(everde, 40, 120);
  image(everde, 80, 120);
}

function fase5() {

    if(temp<2){
       image(fas5, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }    
    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2.5);
    }
}

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }   
  }
  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
  pontos = pontos + 10;
  colisao1.play();
    
     }  
    }
 }
//JOGO - CONDIÇÃO FASE 5

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 10){
 
 tela = 9;
 }
 
 // OBJETIVO
  
  image(eazulclaro, 40, 120);
  image(evermelho, 80, 120);
  image(everde, 120, 120 );
}



function fase5i() {

 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }    
    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2.5);
    }
}

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
    vidas = vidas - 1; 
    colisao2.play();
    }  
  }
  
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
  pontos = pontos + 10;
  colisao1.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
  vidas = vidas - 1;
  colisao2.play();
     }   
  }
  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
    
     }  
 }
//JOGO - CONDIÇÃO FASE 5i

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 20){
 
 tela = 10;
 }
 
 // OBJETIVO
  
  image(eazulclaro, 40, 120);
  image(evermelho, 80, 120);
}

function fase5ii() {

 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }    
    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2.5);
    }
}

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 
 
  // COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
  pontos = pontos + 10;
  colisao1.play();
     }   
  }
  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<1; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
    
     }  
 }
//JOGO - CONDIÇÃO FASE 5ii

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 30){
 
 tela = 11;
 vidas = 2;
 pontos = 0;
 temp = 0;
 att = 0;
 }
 
 // OBJETIVO
  
  image(eazulclaro, 40, 120);
}

function fase6 (){

    if(temp<2){
       image(fas6, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// BRANCO
 
  for(W=0; W<qntd; W++){
  
  image(ebranco, xW[W], yW[W], 2*rW, 2*rW);
  
    yW[W] = yW[W] + vW[W];
    
      if(yW[W] > 700){
      xW[W] = random(250, 850);
      yW[W] = 0;
      vW[W] = random(1,2.5);
    }
  }    

// AZUL
 
  for(B=0; B<qntd; B++){
  
  image(eazul, xB[B], yB[B], 2*rB, 2*rB);
  
    yB[B] = yB[B] + vB[B];
    
      if(yB[B] > 700){
      xB[B] = random(250, 850);
      yB[B] = 0;
      vB[B] = random(1,2);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }

// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
    }
// COLISÃO 

// COLISÃO BRANCO - PERSONAGEM
  
  for(W=0; W<qntd; W++){
   if(dist( n, m, xW[W], yW[W])<r+rW){
     
    xW[W]= random(250, 850);
    yW[W] = 0;
    vW[W] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
} 
 
// COLISÃO AZUL - PERSONAGEM
  
  for(B=0; B<qntd; B++){
   if(dist( n, m, xB[B], yB[B])<r+rB){
     
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,2);
      
      vidas = vidas - 1;
    colisao2.play();
    }  
  }

  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
    pontos = pontos + 10;
    colisao1.play();
     }  
 }
}
//JOGO - CONDIÇÃO FASE 6

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 10){
 
 tela = 12;
 vidas = 2;
 pontos = 0;
 temp = 0;
 att = 0;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("=", 120, 150);
  
  textSize(40);
  
  text("?", 150, 155);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);

}

function fase7 (){

    if(temp<2){
       image(fas7, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// BRANCO
 
  for(W=0; W<qntd; W++){
  
  image(ebranco, xW[W], yW[W], 2*rW, 2*rW);
  
    yW[W] = yW[W] + vW[W];
    
      if(yW[W] > 700){
      xW[W] = random(250, 850);
      yW[W] = 0;
      vW[W] = random(1,2.5);
    }
  }    

    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }
  
// LARANJA
    
  for(L=0; L<qntd; L++){
      
  image(elaranja, xL[L], yL[L], 2*rL, 2*rL);
    
    yL[L] = yL[L] + vL[L];
    
     if(yL[L] > 700){
      xL[L]= random(250, 850);
      yL[L] = 0;
      vL[L] = random(1,2);
    }
  }


// COLISÃO 

// COLISÃO BRANCO - PERSONAGEM
  
  for(W=0; W<qntd; W++){
   if(dist( n, m, xW[W], yW[W])<r+rW){
     
    xW[W]= random(250, 850);
    yW[W] = 0;
    vW[W] = random(1,2);
      
    vidas = vidas - 1;  
    colisao2.play();
    }  
  }
  
// COLISÃO LARANJA - PERSONAGEM

  for(L=0; L<qntd; L++){
   if(dist( n, m, xL[L], yL[L])<r+rL){
     
    xL[L]= random(250, 850);
    yL[L] = 0;
    vL[L] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
} 
 
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
     pontos = pontos + 10;  
     colisao1.play();
    }  
  }
}
//JOGO - CONDIÇÃO FASE 7

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 10){
 
 tela = 13;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("+", 60, 200);
  text("=", 120, 150);
  text("=", 120, 200);
  
  textSize(40);
  
  text("?", 150, 155);
  text("?", 150, 205);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);
  image(ebranco, 20, 170);
  image(evermelho, 80, 170);

}

function fase7i (){

    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
}   

    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }
  
// AZUL
 
  for(B=0; B<qntd; B++){
  
  image(eazul, xB[B], yB[B], 2*rB, 2*rB);
  
    yB[B] = yB[B] + vB[B];
    
      if(yB[B] > 700){
      xB[B] = random(250, 850);
      yB[B] = 0;
      vB[B] = random(1,2);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }


// COLISÃO 

  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
    pontos = pontos + 10;
    colisao1.play();
     }  
 }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
} 
 
// COLISÃO AZUL - PERSONAGEM
  
  for(B=0; B<qntd; B++){
   if(dist( n, m, xB[B], yB[B])<r+rB){
     
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,2);
      
      vidas = vidas - 1;
      colisao2.play();
    
    }  
}
 
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
     pontos = pontos + 10;  
     colisao1.play();
    }  
  }
}
//JOGO - CONDIÇÃO FASE 7i

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 20){
 
 tela = 14;
 pontos = 0;
 vidas = 2;
 temp = 0;
 att = 0;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("=", 120, 150);
  
  textSize(40);
  
  text("?", 150, 155);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);
}

function fase8 (){

    if(temp<2){
       image(fas8, 380, 200);
}
    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2);
    }
}  

    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,3);
    }
  }
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,3);
    }
  }
  
// LARANJA
    
  for(L=0; L<qntd; L++){
      
  image(elaranja, xL[L], yL[L], 2*rL, 2*rL);
    
    yL[L] = yL[L] + vL[L];
    
     if(yL[L] > 700){
      xL[L]= random(250, 850);
      yL[L] = 0;
      vL[L] = random(1,3);
    }
  }


// COLISÃO 

// COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
    
     }    
}
  
// COLISÃO LARANJA - PERSONAGEM

  for(L=0; L<qntd; L++){
   if(dist( n, m, xL[L], yL[L])<r+rL){
     
    xL[L]= random(250, 850);
    yL[L] = 0;
    vL[L] = random(1,3);
    
    pontos = pontos + 10;
    colisao1.play();
     }    
} 
 
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,3);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,3);
      
     vidas = vidas - 1;  
     colisao2.play();
    }  
  }
}
//JOGO - CONDIÇÃO FASE 8

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 10){
 
 tela = 15;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("+", 60, 200);
  text("+", 60, 250);
  text("=", 120, 150);
  text("=", 120, 200);
  text("=", 120, 250);
  
  textSize(40);
  
  text("?", 150, 155);
  text("?", 150, 205);
  text("?", 150, 255);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);
  image(ebranco, 20, 170);
  image(evermelho, 80, 170);
  image(eamarelo, 20, 220);
  image(evermelho, 80, 220);
}

function fase8i (){

    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,2.5);
    }
}   

    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,2.5);
    }
  }
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,2.5);
    }
  }
  
 // AZUL CLARO 
    for(A=0; A<qntd; A++){
      
  image(eazulclaro, xA[A], yA[A], 2*rA, 2*rA);
    
    yA[A] = yA[A] + vA[A];
    
     if(yA[A] > 700){
      xA[A]= random(250, 850);
      yA[A] = 0;
      vA[A] = random(1,2);
    }
} 
   
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,2);
    }
  }


// COLISÃO 

  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,2);
    
   vidas = vidas - 1;
    colisao2.play();
     }  
 }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
} 
 
// COLISÃO AZUL CLARO - PERSONAGEM

  for(A=0; A<qntd; A++){
   if(dist( n, m, xA[A], yA[A])<r+rA){
     
    xA[A]= random(250, 850);
    yA[A] = 0;
    vA[A] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
}
 
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,2);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<qntd; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,2);
      
     pontos = pontos + 10;  
     colisao1.play();
    }  
  }
}
//JOGO - CONDIÇÃO FASE 8i

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 20){
 
 tela = 16;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("+", 60, 200);
  text("=", 120, 150);
  text("=", 120, 200);
  
  textSize(40);
  
  text("?", 150, 155);
  text("?", 150, 205);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);
  image(ebranco, 20, 170);
  image(evermelho, 80, 170);
}

function fase8ii (){

    if(temp>=2){
 // PERSONAGEM

  image(personagem, n, m);
  
  if( keyIsDown(LEFT_ARROW)){
     n=n-6;
     }
  if( keyIsDown(RIGHT_ARROW)){
     n= n+ 6;
     } 
  if(n>950){
    n-= 6;
  }
  if(n<180){
    n+= 6;
  }

  // CORES
  
// VERDE

    for(G=0; G<qntd; G++){
      
  image(everde, xG[G], yG[G], 2*rG, 2*rG);
    
    yG[G] = yG[G] + vG[G];
    
     if(yG[G] > 700){
      xG[G]= random(250, 850);
      yG[G] = 0;
      vG[G] = random(1,3);
    }
}   

    // VERMELHO
    
  for(R=0; R<qntd; R++){
      
  image(evermelho, xR[R], yR[R], 2*rR, 2*rR);
    
    yR[R] = yR[R] + vR[R];
    
     if(yR[R] > 700){
      xR[R]= random(250, 850);
      yR[R] = 0;
      vR[R] = random(1,3);
    }
  }
  
// ROSA
 
  for(P=0; P<qntd; P++){
  
  image(erosa, xP[P], yP[P], 2*rP, 2*rP);
  
    yP[P] = yP[P] + vP[P];
    
      if(yP[P] > 700){
      xP[P] = random(250, 850);
      yP[P] = 0;
      vP[P] = random(1,3);
    }
  }
  
// AZUL
 
  for(B=0; B<qntd; B++){
  
  image(eazul, xB[B], yB[B], 2*rB, 2*rB);
  
    yB[B] = yB[B] + vB[B];
    
      if(yB[B] > 700){
      xB[B] = random(250, 850);
      yB[B] = 0;
      vB[B] = random(1,3);
    }
  }    
    // AMARELO
    
  for(Y=0; Y<qntd; Y++){
      
  image(eamarelo, xY[Y], yY[Y], 2*rY, 2*rY);
    
    yY[Y] = yY[Y] + vY[Y];
    
     if(yY[Y] > 700){
      xY[Y]= random(250, 850);
      yY[Y] = 0;
      vY[Y] = random(1,3);
    }
  }


// COLISÃO 

  // COLISÃO VERDE - PERSONAGEM
  for(G=0; G<qntd; G++){
   if(dist( n, m, xG[G], yG[G])<r+rG){
     
    xG[G]= random(250, 850);
    yG[G] = 0;
    vG[G] = random(1,3);
    
    pontos = pontos + 10;
    colisao1.play();
    
     }  
 }
  
// COLISÃO AMARELO - PERSONAGEM

  for(Y=0; Y<qntd; Y++){
   if(dist( n, m, xY[Y], yY[Y])<r+rY){
     
    xY[Y]= random(250, 850);
    yY[Y] = 0;
    vY[Y] = random(1,3);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
} 
 
// COLISÃO AZUL - PERSONAGEM
  
  for(B=0; B<qntd; B++){
   if(dist( n, m, xB[B], yB[B])<r+rB){
     
    xB[B]= random(250, 850);
    yB[B] = 0;
    vB[B] = random(1,3);
      
      vidas = vidas - 1;
    colisao2.play();
    }  
}
 
// COLISÃO VERMELHO - PERSONAGEM

  for(R=0; R<qntd; R++){
   if(dist( n, m, xR[R], yR[R])<r+rR){
     
    xR[R]= random(250, 850);
    yR[R] = 0;
    vR[R] = random(1,3);
    
    vidas = vidas - 1;
    colisao2.play();
     }    
    } 

// COLISÃO ROSA - PERSONAGEM
  
  for(P=0; P<1; P++){
   if(dist( n, m, xP[P], yP[P])<r+rP){
     
    xP[P]= random(250, 850);
    yP[P] = 0;
    vP[P] = random(1,3);
      
     vidas = vidas - 1;  
     colisao2.play();
    }  
  }
}
//JOGO - CONDIÇÃO FASE 8ii

  fill(200, 30, 40);
  textSize(40);

  text(vidas, 140, 48);

  text(pontos, 1130, 50);
if(vidas == 0) {
  
  tela = 17; 
} 
 if(pontos == 30){
 
 tela = 18;
 }

// OBJETIVO

  textSize(30);

  text("+", 60, 150);
  text("=", 120, 150);
  
  textSize(40);
  
  text("?", 150, 155);

  image(eamarelo, 20, 120);
  image(eazul, 80, 120);
}


function derrota(){
  if(keyIsDown(ESCAPE)){
  tela = 0; 
  press.play();
  }
}
function vitoria(){
    if(keyIsDown(ESCAPE)){
  tela = 0; 
  press.play();
  }
}

// INSTRUÇÕES
function instrucoes (){
  
  if(keyIsDown(ESCAPE)){
  tela = 0; 
  press.play();
  }
} 

// CRÉDITOS
function creditos(){
  
    if(keyIsDown(ESCAPE)){
  tela = 0; 
  press.play();
  }
}