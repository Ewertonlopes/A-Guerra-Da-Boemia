const Cred = (c) =>{
  
  c.imagem = []; 
  c.h = parseInt(50);
  c.j = parseInt(980); 

c.preload = function(){
  c.imagem[0] = c.loadImage('Imagens/Esp/Card1.png');
  c.imagem[1] = c.loadImage('Imagens/Esp/Card2.png');
  c.imagem[2] = c.loadImage('Imagens/Esp/2.jpg');
  c.imagem[3] = c.loadImage('Imagens/Icons/Esc.png');
}
  
c.setup = function() {
  c.createCanvas(x, y);
  c.image(c.imagem[2],0,0,x,y);
  c.image(c.imagem[3],1000,620);
  c.frameRate(10);
}

c.draw = function() {
  c.textFont('Papyrus');
  c.fill(0)
  c.textSize(x/30);
  c.text('Créditos',x/2.8,y/10)
  c.textSize(x/40)
  c.text('Ewerton Vasconcelos Lopes', x/1.9,y/6)
  c.textSize(x/60)
  c.text('Desenvolvedor/Programador',x/1.75,y/4.8)
  c.textSize(x/64)
  c.text('Estudante do segundo periodo do Bacharelado em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte e aficcionado por jogos  de carta.',50,y/5,x/2.1)
  c.textSize(x/40)
  c.text('Eduardo Eudes Prazeres Lopes Jr.',x/80,y/1.75)
  c.textSize(x/60)
  c.text('Roteirista/Educador', x/9, y/1.65);
  c.textSize(x/64)
  c.text('Bacharel em Filosofia pela UFRJ; Mestre em filosofia pela UFRRJ; Doutorando em Filosofia pela UERJ. Aficcionado por historia, literatura europeia e jogos de carta.',x/3,y/1.5,x/1.8)
  //imagens
  if(c.h<235){
    c.h = c.h+5
    c.image(c.imagem[1], c.h,450)
  }
  if(c.j>800){
    c.j = c.j-5
    c.image(c.imagem[0], c.j,y/4.3)
  }
}

c.keyPressed = function(){
  if(c.keyCode === c.ESCAPE){
    c.remove();
    menu.setup();
  }
}
}
