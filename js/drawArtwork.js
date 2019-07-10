//Selectors
const artworkContainer = document.querySelector(".artworkLeftContainer") 
const getArtworkCanvas = document.getElementById("artworkCanvas");

//Canvas
const artworkCanvas = getArtworkCanvas.getContext('2d')
resize();

//Last Known Position
var canvasPosition = { x: 0, y: 0 };

// new position from mouse event
function setPosition(e) {
    canvasPosition.x = e.clientX;
    canvasPosition.y = e.clientY;
}

function resize() {
    artworkCanvas.canvas.width = artworkContainer.offsetWidth;
    artworkCanvas.canvas.height = artworkContainer.offsetHeight;
}

function draw(e) {
    // mouse left button must be pressed
    // if (e.buttons !== 1) return;

    artworkCanvas.beginPath(); // begin

    artworkCanvas.lineWidth = 1.5;
    // artworkCanvas.lineCap = 'round';
    artworkCanvas.strokeStyle = '#000';

    artworkCanvas.moveTo(canvasPosition.x, canvasPosition.y); // from
    setPosition(e);
    artworkCanvas.lineTo(canvasPosition.x, canvasPosition.y); // to
    
    artworkCanvas.stroke(); // draw it!

}

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);