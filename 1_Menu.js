//Resolução
var x,y;
  x = parseInt(1280);
  y = parseInt(720);


const main = (m) =>{

  m.imagem = [];
  m.button = [];
  m.sound = [];
  m.soundtrack = [];

m.preload = function() {
  m.imagem[0] = m.loadImage("Imagens/esp/1.jpg");
}

m.setup = function() {
  
//Setup basico
  m.createCanvas(x, y);
  m.image(m.imagem[0],0,0,x,y);
  m.textSize(50);
  m.fill(0);
  m.textFont('Papyrus');
  m.text('Revolta na Boémia',50,100);
  m.text('Card Game',900,100);
  
//Estilização dos botões
  
  m.button[0] = m.createButton('Novo Jogo');
  m.button[0].position(x/4, y/3);
  m.button[0].mousePressed(m.Startg);
  m.button[0].style("font-family","Comic Sans MS");
  m.button[0].style("background-color","#000000");
  m.button[0].style("color","#fff");
  m.button[0].style("border-radius","50%");
  m.button[0].size(150,40);
  m.button[0].mouseOver(m.ovg);
  m.button[0].mouseOut(m.oug);
  m.button[1] = m.createButton('Instruções');
  m.button[1].position(x/4,y/2.5);
  m.button[1].mousePressed(m.Starti);
  m.button[1].style("font-family","Comic Sans MS");
  m.button[1].style("background-color","#000000");
  m.button[1].style("color","#fff");
  m.button[1].style("border-radius","50%");
  m.button[1].size(150,40);
  m.button[1].mouseOver(m.ovi);
  m.button[1].mouseOut(m.oui);
  m.button[2] = m.createButton('Créditos');
  m.button[2].position(x/4,y/2.15);
  m.button[2].mousePressed(m.Startc);
  m.button[2].style("font-family","Comic Sans MS");
  m.button[2].style("background-color","#000000");
  m.button[2].style("color","#fff");
  m.button[2].style("border-radius","50%");
  m.button[2].size(150,40);
  m.button[2].mouseOver(m.ovc);
  m.button[2].mouseOut(m.ouc);
}

//Funções Estilo botão

m.ovg = function() {
  m.button[0].style("background-color","#F0FFFF");
  m.button[0].style("color","#000000");
}
m.oug = function() {
  m.button[0].style("background-color","#000000");
  m.button[0].style("color","#F0FFFF");
}
m.ovi = function() {
  m.button[1].style("background-color","#F0FFFF");
  m.button[1].style("color","#000000");
}
m.oui = function() {
  m.button[1].style("background-color","#000000");
  m.button[1].style("color","#F0FFFF");
}
m.ovc = function() {
  m.button[2].style("background-color","#F0FFFF");
  m.button[2].style("color","#000000");
}
m.ouc = function() {
  m.button[2].style("background-color","#000000");
  m.button[2].style("color","#F0FFFF");
}

// Funções mudança de tela
  m.Startg = function()  {
    m.remove();
    jogo = new p5(Game);
  };
  m.Starti = function()  {
    m.remove();
    instruções = new p5(Manual);
  };
  m.Startc = function()  {
    m.remove();
    creditos = new p5(Cred);
  };
};

let menu = new p5(main);
