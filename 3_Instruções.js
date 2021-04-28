
const Manual = (i) =>{

  i.imagem = [];

  i.preload = function() {
    i.imagem[0] = i.loadImage('Imagens/Esp/3.jpg');
    i.imagem[1] = i.loadImage('Imagens/Icons/CoraçãoIcon.png');
    i.imagem[2] = i.loadImage('Imagens/Icons/EspadasIcon.png');
    i.imagem[3] = i.loadImage('Imagens/Icons/InfluênciaIcon.png');
    i.imagem[4] = i.loadImage('Imagens/Icons/Esc.png');
    i.imagem[5] = i.loadImage('Imagens/Cards/Demo.png');
    i.imagem[6] = i.loadImage('Imagens/icons/mouse.png')
  }
  
  i.setup = function() {
    i.createCanvas(x, y);
    i.frameRate(60);
  }
  i.draw = function() {
    i.image(i.imagem[0],50,0,1200,700);
    i.image(i.imagem[1],320,250,30,30);
    i.image(i.imagem[2],320,210,30,30);
    i.image(i.imagem[3],320,165,30,30);
    i.image(i.imagem[4],950,530);
    i.image(i.imagem[5],320,320,130,180);
    i.image(i.imagem[6],680,450,90,90);
    i.textFont('Papyrus');
    i.textSize(40);
    i.fill('blue');
    i.text('Manual',550,90)
    i.textSize(20);
    i.fill('red');
    i.text('DEFENDA-SE',275,150);
    i.fill(15);
    i.text(' das forças do rei enquanto espera por uma oportunidade para fugir!!!',450,150);
    i.text('Influencia é ',350,190);
    i.fill('red');
    i.text('CUSTO',450,190);
    if(i.mouseX>320 && i.mouseX<350 && i.mouseY>165 && i.mouseY<195){
      i.noFill();
      i.circle(440,335,30);
    }
    i.fill(15);
    i.text(' para jogar uma carta.',550,190);
    i.text('Ataque é a ',350,230);
    i.fill('red');
    i.text('FORÇA DE COMBATE',450,230);
    if(i.mouseX>320 && i.mouseX<350 && i.mouseY>205 && i.mouseY<240){
      i.noFill();
      i.circle(335,485,30);
    }
    i.fill(15);
    i.text(' de uma carta.',727,230);
    i.text('Vida é o numero que mostra a ',350,270);
    i.fill('red');
    i.text('DURABILIDADE',600,270);
    if(i.mouseX>320 && i.mouseX<350 && i.mouseY>255 && i.mouseY<285){
      i.noFill();
      i.circle(435,485,30);
    }
    i.fill(15);
    i.text(' de uma carta.',795,270);
    i.text('Algumas cartas tem ',575,300);
    i.fill('red');
    i.text('EFEITOS ESPECIAIS.',750,300);
    i.text('Sobreviva por ',625,350);
    i.fill('red');
    i.text('25 TURNOS.',750,350);
    i.textSize(40);
    i.fill(15);
    i.text('Controles',680,400);
    i.textSize(20);
    i.text('Use o ',600,450);
    i.fill('red');
    i.text('MOUSE',670,450);
    i.fill(15);
    i.text(' para controlar as cartas.',780,450);
  }
  i.keyPressed = function(){
    if(i.keyCode === i.ESCAPE){
      i.remove();
      menu.setup();
    }
  }
  }
