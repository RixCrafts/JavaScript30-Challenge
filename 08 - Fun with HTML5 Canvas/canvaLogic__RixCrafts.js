console.log("canvaLogic__RixCrafts.js Loaded");

let canvas = document.querySelector("#draw");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
// ctx.globalCompositeOperation = 'xor';

let lastX = 0;
let lastY = 0;
let drawingFlag = false;
let hue = 0;
let pincelSize = 2;
let pincelDirection = true;

function draw(e){

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    lastX = e.offsetX;
    lastY = e.offsetY;
    ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
    ctx.lineWidth = pincelSize;
    ctx.stroke();
    hue++;
    if(hue >= 360){
        hue = 0
    }
    if (pincelSize >= 100 || pincelSize <= 1) {
        pincelDirection = !pincelDirection;
    }
    if (pincelDirection) {
        pincelSize++
    }else{
        pincelSize--;
    }
}


// -----------------------------------------------------------
// ctx.moveTo(x, y);

// ctx.lineTo(x, y);

// ctx.strokeStyle = color;

// ctx.stroke();

// -----------------------------------------------------------------

// Actions
document.addEventListener('mousedown', (e) => {
    lastX = e.offsetX;
    lastY = e.offsetY;
    drawingFlag = true;
    ctx.moveTo(lastX, lastY);
    console.log(`mousedown: (${lastX},${lastY})`);
});

document.addEventListener('mousemove', (e) => {
    if (drawingFlag) {
        console.log(`Y: ${e.offsetY}`);
        console.log(`X: ${e.offsetX}`);
        draw(e);
    }
});

document.addEventListener('mouseup', () => drawingFlag = false);
document.addEventListener('mouseleave', () => drawingFlag = false)