var ball;
var playerCount,gameState=0;
var player,form,game;
var allPlayers;
var cars,car1,car2,car3,car4;
function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
     database = firebase.database();
     game = new Game()
     game.getState()
     game.start()
   }


function draw(){
       if(playerCount===4){
         game.updateState(1)
       }
      if(gameState===1) {
        game.play()
      } 
       
}

