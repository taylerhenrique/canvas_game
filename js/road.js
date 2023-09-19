ctx.lineTo(100,600);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700,0);
    ctx.lineTo(700,600);
    ctx.stroke();
	//Faixas amarela
    ctx.beginPath();
    ctx.moveTo(395,0);
    ctx.lineTo(395,600);
    ctx.strokeStyle = "yellow";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(405,0);
    ctx.lineTo(405,600);
    ctx.stroke();
    
drawDiverserLines(ctx);
}

function drawDiverserLines(ctx){
		//Faixa listradas brancas
	for (let i = 0; i < lines.length; i++) {
        ctx.beginPath();
        ctx.moveTo(247.5, lines[i]);
        ctx.lineTo(247.5, lines[i]+50);
        ctx.strokeStyle = "white";
        ctx.stroke();
        
    }

    for (let i = 0; i < lines.length; i++) {
        ctx.beginPath();
        ctx.moveTo(800-247.5, lines[i]);
        ctx.lineTo(800-247.5, lines[i]+50);
        ctx.strokeStyle = "white";
        ctx.stroke();
        
    }
}
//Velocidade adaptada
function updateRoad(){
    for (let i = 0; i < lines.length; i++){
        lines[i] += speedRoad;

        if(lines[i] >= 800) lines[i] = -100;
    }

}

function setSpeedRoad(newSpeed){
    speedRoad = newSpeed;
}
