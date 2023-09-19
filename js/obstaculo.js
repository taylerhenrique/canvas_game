var randomObstaculos = ["img/npcBlue.png", "img/npcGreen.png"];
var qualquerCOisa =  0;
var speedObstaculo = 10;


function getRandomObstaculos(){
    var randomNumber = Math.floor(Math.random()*randomObstaculos.length);
    
    return randomObstaculos[randomNumber];
}


function Obstaculo() {
var lowerX;
var upperX;
var lowerY;
var upperY;

var obstaculoHeight = 150;
var obstaculoWidth = 80;
var obstaculoImage = new Image ();


this.update = function(){
    console.log(speedObstaculo);
    upperY += speedObstaculo;
    lowerY += speedObstaculo; 

    if (upperY >= 800) {
        upperY = Math.floor(Math.random()*(-500))-200; 
        upperX = Math.floor(Math.random()*(560-obstaculoWidth))+120;
        lowerX = upperX + obstaculoWidth;
        lowerY = upperY + obstaculoHeight;
        obstaculoImage.src = getRandomObstaculos();
    }
}

this.draw = function(ctx){
    ctx.drawImage(obstaculoImage, upperX, upperY, obstaculoWidth, obstaculoHeight);
    if (qualquerCOisa-10){
        qualquerCOisa++;
    }
}

randomPosition = function(){
    var randomPositionX = Math.floor(Math.random()*(560-obstaculoWidth));
    var randomPositionY = Math.floor(Math.random()*(-500));
    upperX = randomPositionX + 120;
    upperY = randomPositionY - 200;
    lowerX = upperX + obstaculoWidth;
    lowerY = upperY + obstaculoHeight;
}

randomPosition();

this.checkColision = function (carWidth, carHeight, X, Y){
    if(X >= upperX && X <= lowerX && Y >= upperY && Y <= lowerY){
        return true;
    }

    if(X + carWidth >= upperX && X + carWidth <= lowerX && Y >= upperY && Y <= lowerY){
        return true;
    }

    if(X >= upperX && X <= lowerX && Y + carHeight >= upperY && Y + carHeight <= lowerY){
        return true;
    }

    if(X + carWidth >= upperX && X + carWidth <= lowerX && Y + carHeight >= upperY && Y + carHeight <= lowerY){
        return true;
    }
    return false;
}

obstaculoImage.src = getRandomObstaculos();

}

var obstaculos = [];
for (let i = 0; i < 3; i ++ ){
    obstaculos.push(new Obstaculo());
    
    
    
// Gerando Obstaculos
}

function drawObstaculos(ctx){
    for (let i = 0; i < obstaculos.length; i ++){
        obstaculos[i].draw(ctx);
    }
}

function setObstaculoSpeed(newSpeed){
    speedObstaculo = newSpeed;
}

function updateObstaculo(){
    for ( let i = 0; i < obstaculos.length; i ++){
        obstaculos[i].update();

    }
}

function checkObstaculos(carWidth, carHeight, X, Y){
    for (let i = 0; i < obstaculos.length; i ++){

        if( obstaculos[i].checkColision(carWidth, carHeight, X, Y)){
            return true;
        }
    }
    return false;
}
