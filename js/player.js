var position = 247.5/2;
var speedPlayer = 7;
var carWidth = 80;
var carHeight = 150;
var carImage = new Image(carWidth);
carImage.src = "img/car.png";
var life = 3;
var lifePosition = 50;
var lifeWidth = 30;
var lifeHeight = 50;
var lifeImage = new Image(lifeWidth);
lifeImage.src = "img/life.png";
var score;

var key = {};

document.addEventListener("keydown", function(event) {
    key[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    key[event.key] = false;
});

function updatePlayer(){
    if((key["a"] || key["A"]) && position>=120){
        position -= speedPlayer;
    }

    if((key["d"] || key["D"]) && position<=680-carWidth){
        position += speedPlayer;
    }

    score += 1;

}

function drawPlayer(ctx){
    ctx.drawImage(carImage, position, 600-carHeight, carWidth, carHeight);
    for(i = 0; i<life; i++){
        ctx.drawImage(lifeImage,lifePosition = i*(lifeWidth + 5), 50, lifeHeight, lifeWidth);
    }
    ctx.font = "25px serif";
    ctx.fillStyle = "white";
    ctx.fillText("score: " + score, 10, 50);
}

function setLife(newLife){
    life = newLife;
}

function getLife(){
    return life
}

function setPlayerVelocity(newSpeed){
    speedPlayer = newSpeed;
}

function resetScore(){
    score = 0;
}