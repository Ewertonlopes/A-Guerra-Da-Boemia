const Game = (g) =>{

	g.imagem = [];
	g.button = [];
	g.only = true;
	g.only2 = true;
	g.showv = false;
	g.trap = false;
	g.noDamage = false;
	g.dead = false;
	g.noDamagecounter = parseInt(0); 
	g.imageshown = [];
	g.menu = false;
	g.soundtrack = [];
	g.Eespeciais = [];

//Mão

	//Posição
	g.mãoxc = [];
	g.mãoyc = [];
	g.mãoxf = [];
	g.mãoyf = [];
	for(n=0;n<7;n++){
		//Ponto Constante
		g.mãoxc[n] = 150+130*n;
		g.mãoyc[n] = 500;
		//Flutuante
		g.mãoxf[n] = 150+130*n;
		g.mãoyf[n] = 500;
	}
	//Carta ou não?
	g.mão = [];
	for(n=0;n<7;n++){
		g.mão[n] = false;
	}


//Posição Campo

	//Posição
	g.campoxi = [];
	g.campoxf = [];
	g.campoyi = [];
	g.campoyf = [];
	g.especiaison = [];
	for(n=0;n<10;n++){
		if(n<5){
			g.campoxi[n] = (235+135*n);
			g.campoxf[n] = (369+135*n);
			g.campoyi[n] = (100);
			g.campoyf[n] = (280);
		}
		else{
			g.campoxi[n] = (235+135*(n-5));
			g.campoxf[n] = (369+135*(n-5));
			g.campoyi[n] = (300);
			g.campoyf[n] = (480);
		}
	}
	//Carta ou não?
	g.campo = [];
	for(n=0;n<10;n++){
		g.campo[n] = false;
		g.especiaison[n] = false;
	}
	//Def
	g.campodef = [];
	g.campodef[0] = 1;



//Variaveis Importantes

	g.turn = parseInt(1);
	g.vida = parseInt(100);
	g.manatotal = parseInt(0);
	g.mãocode = [];
	g.campocode = [];
	g.proximacarta = parseInt(0);
	g.campo[0] = true;

		//deck stats
		g.deckcode = [];
		g.deckatk = [];
		g.deckmana = [];
		g.deckdef = [];
		g.deckminion = [];
		g.deckvisu = [];
		g.deckim = [];
		g.randomhand = [];
	
		//fightstats
		g.atackAcounter = parseInt(0);
		g.atackBcounter = parseInt(0);
	

//Funções P5.js

g.preload = function() {
	g.soundtrack[0] = g.loadSound('Sounds/Epic.mp3');
	g.Eespeciais[0] = g.loadImage('Imagens/Esp/explosão.png');
	g.imagem[1] = g.loadImage('Imagens/Cards/Cardback1.png');
    g.imagem[2] = g.loadImage("Imagens/Icons/EspadasIcon.png");
    g.imagem[3] = g.loadImage("Imagens/Icons/InfluenciaIcon.png");
	g.imagem[4] = g.loadImage("Imagens/Icons/CoracaoIcon.png");
	for(n=0;n<25;n++){
		if(n<=8){
			g.deckim[n] = g.loadImage(`Imagens/DeckA/Card00${n+1}.jpg`);
		}
		else{
			g.deckim[n] = g.loadImage(`Imagens/DeckA/Card0${n+1}.jpg`);
		}
	}
}

g.setup = function() {
  	g.createCanvas(x, y);
	g.frameRate(60);
	g.soundtrack[0].loop();
	g.soundtrack[0].setVolume(0.5);

	//Botão proximo turno

	g.button[0] = g.createButton('Proximo turno');
	g.button[0].position(1000, 250);
	g.button[0].style("font-family","Papyrus");
	g.button[0].style("background-color","#000000");
	g.button[0].style("color","#fff");
	g.button[0].size(200,70);
	g.button[0].mousePressed(g.nextt);
	g.button[0].mouseOver(g.ovg);
	g.button[0].mouseOut(g.oug);
	g.x=parseInt(350);
	g.y=parseInt(350);


	//Codigos do deck

	for(i=0;i<60;i++){
		g.deckcode[i] = parseInt(i+1);
	}
	//povo
	for(i=1;i<=3;i++){
		g.deckvisu[i] = 1
		g.deckatk[i] = 1
		g.deckdef[i] = 1
		g.deckmana[i] = 1
		g.deckminion[i] = true;
	}
	//lanceiros
	for(i=4;i<=8;i++){
		g.deckvisu[i] = 0
		g.deckatk[i] = 2
		g.deckdef[i] = 2
		g.deckmana[i] = 1
		g.deckminion[i] = true;
	}
	//Infantaria de frente
	for(i=9;i<=12;i++){
		g.deckvisu[i] = 4
		g.deckatk[i] = 4
		g.deckdef[i] = 4
		g.deckmana[i] = 4
		g.deckminion[i] = true;
	}
	//Mosqueteiro
	for(i=13;i<=18;i++){
		g.deckvisu[i] = 5
		g.deckatk[i] = 4
		g.deckdef[i] = 2
		g.deckmana[i] = 3
		g.deckminion[i] = true;
	}
	//Mercenário
	for(i=19;i<=23;i++){
		g.deckvisu[i] = 6
		g.deckatk[i] = 3
		g.deckdef[i] = 2
		g.deckmana[i] = 2
		g.deckminion[i] = true;
	}
	//Cavalaria
	for(i=24;i<=26;i++){
		g.deckvisu[i] = 7
		g.deckatk[i] = 5
		g.deckdef[i] = 5
		g.deckmana[i] = 5
		g.deckminion[i] = true;
	}
	//Diplomata
	for(i=27;i<=31;i++){
		g.deckvisu[i] = 8
		g.deckatk[i] = 0
		g.deckdef[i] = 4
		g.deckmana[i] = 2
		g.deckminion[i] = true;
	}
	//Guerrilha
	for(i=32;i<=37;i++){
		g.deckvisu[i] = 9
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 1
		g.deckminion[i] = false;
	}
	//Fossos
	for(i=38;i<=44;i++){
		g.deckvisu[i] = 10
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 2
		g.deckminion[i] = false;
	}
	//Fé inabalavel
	for(i=45;i<=48;i++){
		g.deckvisu[i] = 11
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 5
		g.deckminion[i] = false;
	}
	//Muralhas de Praga
	for(i=49;i<=51;i++){
		g.deckvisu[i] = 12
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 7
		g.deckminion[i] = false;
	}
	//Defesa do palacio estrela de verão
	for(i=52;i<=55;i++){
		g.deckvisu[i] = 13
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 3
		g.deckminion[i] = false;
	}
	//Fé protestante
	for(i=56;i<=58;i++){
		g.deckvisu[i] = 14
		g.deckatk[i] = 0
		g.deckdef[i] = 0
		g.deckmana[i] = 1
		g.deckminion[i] = false;
	}
	//Comandante cristiano 1
		g.deckvisu[59] = 2
		g.deckatk[59] = 7
		g.deckdef[59] = 7
		g.deckmana[59] = 7
		g.deckminion[i] = true;

	//Rei frederico V
		g.deckvisu[60] = 3
		g.deckatk[60] = 15
		g.deckdef[60] = 1
		g.deckmana[60] = 5
		g.deckminion[i] = true;
	
shuffle(g.deckcode)

	//Game Start
	g.manatotal = g.manatotal + 1;
	g.mana = g.manatotal;
	for(i=0;i<5;i++){
		g.mão[i] = true;
		g.mãocode[i] = g.deckcode[i]
	}
	g.proximacarta = 5;	


//console.logs

}

g.draw = function() {
	g.tabuleiro();
	for(n=0;n<7;n++){
		if(g.only===false){
			g.movercard(m);
		}
		else{
			g.movercard(n);
		}
	}
	for(n=0;n<7;n++){
		if(g.mão[n] === true){
			g.cardm(g.mãocode[n],n)	
			g.show(n);
		}
	}
	for(j=5;j<10;j++){
		if(g.campo[j] === true){
			g.cardc(g.campocode[j],j);
		}
	}
	for(n=0;n<5;n++){
		if(g.campo[n] === true){
			g.enemy(n);
		}
	}
	for(n=0;n<7;n++){
			g.show(n);
			g.show2(n);
		}

	if(g.especiaison===true){
		g.efeitos()
		setTimeout(g.especiaison=false,500);
	}

	if(g.menu === true){
		g.menuesc();
	}
	if(g.turn === 25){
		g.remove();
		winner = new p5(win);
	}
	if(g.vida<=0){
		g.remove();
		loser = new p5(lose);
	}
}

//Funções de draw

g.tabuleiro = function() {
	g.background(130);
	g.noFill();
	for(n=0;n<10;n++){
		g.rect(g.campoxi[n],g.campoyi[n],130,180);
	}
	for(n=0;n<7;n++){
		g.rect(g.mãoxc[n],g.mãoyc[n],130,180);
	}
	for(n=1;n<=10;n++){
		g.image(g.imagem[1],1140-(2*n),510-(2*n));
	}
	for(n=1;n<=10;n++){
		g.image(g.imagem[1],1140-(2*n),-130-(2*n));
	}
	for(n=0;n<7;n++){
		g.image(g.imagem[1],150+130*n,-130);
	}
	g.fill(255);
	g.rect(1000,360,250,80);
	//contador de vida
	g.image(g.imagem[4],1020,375);
	g.textSize(45);
	g.fill(0);
	g.text(`${g.vida}`,1080,415);
	//contador de mana
	for(n=1;n<=g.mana;n++){
		g.image(g.imagem[3],30,700-(50*n));
	}
	//contador de turno
	g.fill(255);
	g.rect(1000,155,250,80);
	g.textSize(45);
	g.fill(0);
	g.text('Turno:',1050,215)
	g.text(`${g.turn}`,1180,215);
}

g.menuesc = function() {
	if(g.mouseX<=750 && g.mouseX>=430 && g.mouseY>=280 && g.mouseY<=330){
		g.cor1 = 255
	}
	else{
		g.cor1 = 180
	}
	if(g.mouseX<=750 && g.mouseX>=430 && g.mouseY>=360 && g.mouseY<=410){
		g.cor2 = 255
	}
	else{
		g.cor2 = 180
	}
	g.fill(120);
	g.rect(400,250,380,200,20);
	g.fill(g.cor1)
	g.rect(430,280,320,50,20)
	g.fill(0);
	g.text('Continuar',478,317)
	g.fill(g.cor2);
	g.rect(430,360,320,50,20)
	g.fill(0);
	g.text('Desistir',478,397);

	if(g.mouseX<=750 && g.mouseX>=430 && g.mouseY>=280 && g.mouseY<=330 && g.mouseIsPressed){
		g.menu = false
	}
	else if(g.mouseX<=750 && g.mouseX>=430 && g.mouseY>=280 && g.mouseY<=410 && g.mouseIsPressed){
		g.remove();
		menu.setup();
	}
}

//Funções Principais

g.enemy = function(n) {
	if(g.turn<20){
		g.image(g.deckim[Math.ceil(14+g.turn/2)],g.campoxi[n],g.campoyi[n],130,180)
	}
	else{
		g.image(g.deckim[24],g.campoxi[n],g.campoyi[n],130,180)
	}
}

g.nextt = function() {
	g.fight();
	g.especiaison = true;
	g.puxc();
 g.turn = g.turn + 1;
 if(g.turn<=10){
	 g.manatotal = g.manatotal + 1;
 }
 g.mana = g.manatotal;

 if(g.turn<=20){
	for(n=0;n<5;n++){
		if(g.campo[n] === true && g.turn%2 !== 0){
		   g.campodef[n] = g.campodef[n] + 1; 
		}
	}
}
if(g.turn<13){
	for(n=0;n<5;n++){
		if(g.campo[n] === false){
		   g.campo[n] = true;
		   g.campodef[n] = Math.floor(0.5 + g.turn/2); 
		   n = 10
		}
	}
}
else{
	for(n=0;n<5;n++){
		if(g.campo[n] === false){
		   g.campo[n] = true;
		   g.campodef[n] = Math.floor(0.5 + g.turn/2); 
		   n = 10
		}
	}
	for(n=0;n<5;n++){
		if(g.campo[n] === false){
		   g.campo[n] = true;
		   g.campodef[n] = Math.floor(0.5 + g.turn/2); 
		   n = 10
		}
	}
}

}

g.fight = function() {
	for(n=0;n<5;n++){
		if(g.campo[n] === true){
			if(g.turn<20){
				g.atackAcounter = g.atackAcounter + Math.ceil(g.turn/2);
			}
			else{
				g.atackAcounter = g.atackAcounter + 10;
			}
		}
	}
	for(n=5;n<10;n++){
		if(g.campo[n] === true){
			g.atackBcounter = g.atackBcounter + g.deckatk[g.campocode[n]]
		}
	}

	if(g.trap === true){
		g.atackBcounter = g.atackBcounter + g.atackAcounter
		g.trap = false;
		}

	console.log(g.atackBcounter);
	console.log(g.atackAcounter);
	console.log(g.campodef);

	for(n=0;n<5;n++){
		if(g.campo[n] === true && g.atackBcounter>=g.campodef[n]){
			g.campo[n] = false;
			g.atackBcounter = g.atackBcounter - g.campo[n];
		}
	}

	for(n=5;n<10;n++){
		if(g.campo[n] === true && g.atackAcounter>=g.deckdef[g.campocode[n]]){
			g.campo[n] = false;
			g.atackAcounter = g.atackAcounter - g.deckdef[g.campocode[n]];
		}
	}
	if(g.atackAcounter>0){
		if(g.noDamage===false){
			g.vida = g.vida - g.atackAcounter
		}
		else{
			g.noDamagecounter = g.noDamagecounter - 1
			if(g.noDamagecounter === 0){
				g.noDamage = false;
			}
		}
	}

	g.atackBcounter = parseInt(0);
	g.atackAcounter = parseInt(0);
}

g.show = function(n){
	if(g.mão[n] === true && g.mouseX<=g.mãoxf[n]+130 && g.mouseX>=g.mãoxf[n] && g.mouseY>=g.mãoyf[n] && g.mouseY<=g.mãoyf[n]+180){
		g.imageshown[n] = g.deckvisu[g.mãocode[n]];
		g.showv = true;
	}
	else{
		g.showv = false;
	}
}

g.show2 = function(n){
	if(g.showv === true){
		g.image(g.deckim[g.imageshown[n]],0,150,230,340)
	}
}

g.puxc = function(){
	for(n=0;n<7;n++){
		if(g.mão[n] === false){
			g.mãocode[n] = g.deckcode[g.proximacarta];
			g.mão[n] = true;
			g.proximacarta = g.proximacarta+1
			n=10;
		} 
	}		
}

g.cardm = function(i,m) {
	g.image(g.deckim[g.deckvisu[i]],g.mãoxf[m],g.mãoyf[m],130,180);
}

g.cardc = function(i,m) {
	g.image(g.deckim[g.deckvisu[i]],g.campoxi[m],g.campoyi[m],130,180);
}

g.movercard = function(n) {
	if(g.mão[n] === true && g.mouseX<=g.mãoxf[n]+130 && g.mouseX>=g.mãoxf[n] && g.mouseY>=g.mãoyf[n] && g.mouseY<=g.mãoyf[n]+180 && g.mouseIsPressed){		
		g.only = false;
		m=n;
		g.mãoyf[n]=g.mouseY-90;
		g.mãoxf[n]=g.mouseX-65;
		g.mouseReleased = function(){
			if(g.mão[n]===true){
				for(m=5;m<10;m++){
					if(g.campo[m] === false && g.mouseX<=g.campoxf[m] && g.mouseX>=g.campoxi[m] && g.mouseY>=g.campoyi[m] && g.mouseY<=g.campoyf[m] && g.mana>=g.deckmana[g.mãocode[n]]){
						g.campocode[m] = g.mãocode[n];
						g.campo[m] = true;
						g.mão[n] = false;
						g.only = true;
						g.mana = g.mana - g.deckmana[g.mãocode[n]];
						g.mãoxf[n] = g.mãoxc[n]
						g.mãoyf[n] = g.mãoyc[n]
						if(g.deckvisu[g.campocode[m]]===parseInt(3)){
							g.Card004();
						}
						if(g.deckvisu[g.campocode[m]]===parseInt(8)){
							g.Card009();
						}
						if(g.deckvisu[g.campocode[m]]===parseInt(2)){
							g.Card003();
						}
						
						if(g.deckminion[g.campocode[m]]===false){
							g.campo[m]=false
							if(g.deckvisu[g.campocode[m]]===parseInt(9)){
								g.Card010();
							}
							if(g.deckvisu[g.campocode[m]]===parseInt(10)){
								g.Card011();
							}
							if(g.deckvisu[g.campocode[m]]===parseInt(11)){
								g.Card012();
							}
							if(g.deckvisu[g.campocode[m]]===parseInt(12)){
								g.Card013();
							}
							if(g.deckvisu[g.campocode[m]]===parseInt(13)){
								g.Card014();
							}
							if(g.deckvisu[g.campocode[m]]===parseInt(14)){
								g.Card015();
							}
						}
						m=10;
						}
					else{
						g.mãoxf[n]=g.mãoxc[n];
						g.mãoyf[n]=g.mãoyc[n];
						g.only = true
						}
					}
				}	
			} 
	}
}

g.ovg = function() {
	g.button[0].style("background-color","#F0FFFF");
	g.button[0].style("color","#000000");
  }
g.oug = function() {
	g.button[0].style("background-color","#000000");
	g.button[0].style("color","#F0FFFF");
  }

g.keyPressed = function(){
 	if(g.keyCode === g.ESCAPE){
		g.menu = true;
  	}
}

//Efeitos Especiais
g.efeitos = function() {
	g.image(g.Eespeciais[0],150,220);
	g.image(g.Eespeciais[0],100,80);
	g.image(g.Eespeciais[0],250,110);
	g.image(g.Eespeciais[0],450,230);
	g.image(g.Eespeciais[0],230,370);
	g.image(g.Eespeciais[0],560,350);
	g.image(g.Eespeciais[0],820,180);
	g.image(g.Eespeciais[0],660,120);
}

//Funções de cartas especiais

g.Card003 = function() {
	for(n=0;n<5;n++){
		if(g.campo[n]===true){
			g.campo[n]=false;
		}
	}
}

g.Card004 = function() {
	g.vida = parseInt(100);
}

g.Card009 = function() {
	for(n=0;n<10;n++){
		if(g.vida<100){
			g.vida = g.vida + 1;
		}
	}
}

g.Card010 = function() {
	for(i=5;i<10;i++){
		if(g.campo[i] === true && g.dead === false){
			g.campo[i] = false;
			g.dead = true
		}
	}
	for(l=0;l<5;l++){
		if(g.campo[l] === true && g.dead === true){
			g.campo[l] = false;
			g.dead = false
		}
	}
	g.puxc();
}

g.Card011 = function() {
	g.trap = true;
}

g.Card012 = function() {
		g.puxc();
		g.puxc();
		g.puxc();
	for(n=0;n<2;n++){
		if(g.mana<10){
			g.mana = g.mana+1
		}
	}
}

g.Card013 = function() {
	g.noDamage = true;
	g.noDamagecounter = parseInt(2);
}

g.Card014 = function() {
	g.puxc();
	g.puxc();
	g.trap = true;
}

g.Card015 = function(){
	g.puxc();
	if(g.manatotal<10){
		g.manatotal = g.manatotal +1
	}
	else{
		g.puxc();
	}
}
}

const win = (w) =>{
	w.imagem = [];

	w.preload = function() {
		w.imagem[0] = w.loadImage("Imagens/esp/3.jpg");
	}

	w.setup = function(){
		w.createCanvas(x,y);
		w.image(w.imagem[0],50,0,1200,700);
		w.textFont('Papyrus');
		w.fill('blue');
		w.textSize(x/30);
		w.text('Você Ganhou',500,150);
		w.fill(0);
		w.textSize(20);
		w.text('Seguindo a revolta da boémia o mundo europeu entrou no conflito que posteriormente veio a ser ',250,250);
		w.text('conhecido como a guerra dos 30 anos. Protestantes e Catolicos entraram em uma serie de', 250,300);
		w.text('confrontos sangrentos que somaram o maior numero de mortes pré-primeira guerra mundial',250,350);
		w.text('Mas, parabens, você venceu!!!',250,400);
		w.fill('red');
		w.text('Para Jogar denovo Aperte ESC',750,500);
	}

	w.keyPressed = function(){
		if(w.keyCode === w.ESCAPE){
		  w.remove();
		  menu.setup();
		}
	  }

}

const lose = (l) =>{
	l.imagem = [];

	l.preload = function() {
		l.imagem[0] = l.loadImage("Imagens/esp/3.jpg");
	}

	l.setup = function(){
		l.createCanvas(x,y);
		l.image(l.imagem[0],50,0,1200,700);
		l.textFont('Papyrus');
		l.fill('red');
		l.textSize(x/30);
		l.text('Você Perdeu',500,150);
		l.fill(0)
		l.text('"Pestis eram vivus - moriens tua mors ero."',250,250);
		l.text('(Vivo, sou tua peste - morto, serei tua morte.)', 250,300);
		l.text('Martinho Lutero',650,350);
		l.textSize(20);
		l.text('Você não conseguiu escapar tente de novo apertando a tecla ESC',300,450);

	}

	l.keyPressed = function(){
		if(l.keyCode === l.ESCAPE){
		  l.remove();
		  menu.setup();
		}
	  }

}
