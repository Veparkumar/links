var paintcanvas = document.getElementById("canves1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
var isPainting = false;

function setWidht(value){
    if(isNumeric(value)){
        paintcanvas.width = value;
    }
}

function setHeight(value){
    if(isNumeric(value)){
        paintcanvas.height = value;
    }
}

function doPaint(x,y){
    if(isPainting){
        paintCircle(x,y);
    }
}

function changecoler(newColer){
    color = newColer;
    document.getElementById("sizeOutput").value=newSize;
}

function clearcanvas(){
    context.clearRect(0,0, paintcanvas.width,paintcanvas.height);
}
function paintcanvas(x,y){
    context.beginPath();
    context.arc(x,y, radius,0,Math.PI * 2,true);
    context.fillStyle = color;
    context.fill();
}
function isNumeric(value){
    return !isNuN(value);
}