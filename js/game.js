class Game{
    constuctor(){

}
updateState(state){
database.ref('/').update({
    gameState:state
})
}
getState(){
    console.log("hai")
database.ref('gameState').on("value",function(data){
    gameState = data.val()
    console.log(gameState)
   
})
}
start(){
     if(gameState===0){
        player=new Player();
        player.getCount()
        form=new Form()
        form.display()
    }
car1 = createSprite(100,200)
car2 = createSprite(300,200)
car3 = createSprite(500,200)
car4 = createSprite(700,200)
cars = [car1,car2,car3,car4]
}
play(){
    background("white")
    form.hide();
    text("gameStart",120,100)
    player.getPlayerInfo()

    if (allPlayers!==undefined){
        var index = 0
        var x = 0
        var y;
var displayPosition=130
for(var plr in allPlayers){
    index=index+1
    x=x+200
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
    if(index===player.index){
        cars[index-1].shapeColor="red"
    }
    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
if (plr==="player"+player.index){
fill("red")
}
else{fill("black")}
displayPosition=displayPosition+20
text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,displayPosition)
}
}
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance=player.distance+50
        player.update()
    
}
    drawSprites()
}

}
