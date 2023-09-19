const FPS = 60;
const GAMESPEED = 0.25
const d = new Date();

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

var temporizador = 0;
var startImage = new Image();
startImage.src = "img/start.png";

var state = 0;
var dificuldade = 0;
var stop = false;
var frameCount = 0;
var FPSInterval = 1000/FPS;
var startTime;
var now;
var then;
var elapsed;

var animitionLoopId;
var animationStartId;



addEventListener("click", (MouseEvent) => {
    if(MouseEvent.clientX < 800 && MouseEvent.clientY < 600){
        if(state == 0){
            state = 1;
            cancelAnimationFrame(animationStartId);
            gameLoop();
        }
        if(state == 1){
            //jogo esta acontecendo
        }
        if(state == 2){
           cancelAnimationFrame(animitionLoopId);
            startGame();
        }
    }else if(MouseEvent.clientX < 950 && MouseEvent.clientY < 600){
        if(dificuldade == 0){
            dificuldade = 1;
        } else if(dificuldade == 1){
            dificuldade = 2;
        }else if(dificuldade == 2){
            dificuldade = 0;
        }
    }
})

function init(){
    resetScore();
    then = Date.now();
    startTime = then;

    state = 0;
    console.log("aspas");
    if(dificuldade == 0){
        setLife(3);
        setPlayerVelocity(8);
        setSpeedRoad(8);
        setObstaculoSpeed(8);
    }
    
    if(dificuldade == 1){
        setLife(2);
        setPlayerVelocity(7);
        setSpeedRoad(10);
        setObstaculoSpeed(10);
    }
    
    if(dificuldade == 2){
        setLife(1);
        setPlayerVelocity(6);
        setSpeedRoad(15);
        setObstaculoSpeed(15);
    }
}


function startGame(){
    init();
    clearGame();
    ctx.drawImage(startImage, 0, 0, 800, 600);
    drawDificulty();
    animationStartId = requestAnimationFrame(startGame);
    
}

function gameOver(){
    if(getLife() <= 0){
        return true;
    }

    if(checkObstaculos(carWidth, carHeight, position, 600-carHeight)){

        if(temporizador == 0){
            setLife(getLife() -1);
            temporizador += speedPlayer;
            
            if(getLife() <= 0){
                return true;
            }
        }else{
            temporizador += speedPlayer;
            
            if(temporizador > 250){
                temporizador = 0;
            }
            
        }

        
        
    }
    return false;
}

function update(){

    updateRoad();
    updatePlayer();
    updateObstaculo();

}

function draw(){
    drawRoad(ctx);
    drawObstaculos(ctx);
    drawPlayer(ctx);
    drawDificulty();
    
}

function gameLoop(){
    now = Date.now();
    elapsed = now - 100;
    if(elapsed > FPSInterval){
        then = now - (elapsed % FPSInterval);
        if (!gameOver()){
            clearGame();
            update();
            draw();
        
        }else{
            state = 2;
            drawGameOver();
    }

    }
    animitionLoopId = requestAnimationFrame(gameLoop);
}

function drawGameOver(){
    var gameOverImage = new Image();
    gameOverImage.src = "img/gameOver.png";
    clearGame();
    ctx.drawImage(gameOverImage, 0, 0, 800, 600);
    drawDificulty();
    
}

function clearGame(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 950, 700);
}

function drawDificulty(){
    ctx.font = "50px serif";
    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.moveTo(800,0);
    ctx.lineTo(800,600);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "";
    ctx.stroke();

	//Definindo as dificuldades
    if(dificuldade == 0){    
        ctx.fillText("F", 850, 50);
        ctx.fillText("A", 850, 100);
        ctx.fillText("C", 850, 150);
        ctx.fillText("I", 850, 200);
        ctx.fillText("L", 850, 250);
    }
    if(dificuldade == 1){
        ctx.fillText("M", 850, 50);
        ctx.fillText("E", 850, 100);
        ctx.fillText("D", 850, 150);
        ctx.fillText("I", 850, 200);
        ctx.fillText("O", 850, 250);
    }
    if(dificuldade == 2){
        ctx.fillText("D", 850, 50);
        ctx.fillText("I", 850, 100);
        ctx.fillText("F", 850, 150);
        ctx.fillText("I", 850, 200);
        ctx.fillText("C", 850, 250);
        ctx.fillText("I", 850, 300);
        ctx.fillText("L", 850, 350); 
    }
}

animationStartId = requestAnimationFrame(startGame);



