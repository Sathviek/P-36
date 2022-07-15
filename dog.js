class dog{
    constructor(){
        readState=database.ref('gameState');
        readState.on("value", function(data)){
            gameState=data.val();
        }

        if(gameState!=Hungry){
            feed.hide();
            addFood.hide()
            dog.remove();
        }else{
            feed.show();
            addFood.show();
            dog.addImage(sadDog)    
        }
        function update(state){
            database.ref('/').update({
                gameState:state
            })
        }
    }
}