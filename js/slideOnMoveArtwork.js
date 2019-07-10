
//Selectors
const artworkContainer = document.querySelector(".artworkLeftContainer") 
const artworkImage = document.querySelector(".artworkImage") 
const getArtworkCanvas = document.getElementById("artworkCanvas");

//Initialize Counters
let indexOfImages = 1
let mouseCounter = 0

//Artwork Image List
const artworkImageList = [
    {
        source: "./imgs/artwork01.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/artwork02.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/artwork03.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork04.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork05.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork06.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork07.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork08.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork09.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork10.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork11.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork12.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork13.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork14.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork15.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork16.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork17.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork18.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork19.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork20.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork21.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork22.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork23.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork24.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork25.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork26.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork27.png",
        ratio: "vertical",
    },
    {
        source: "./imgs/artwork28.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork29.png",
        ratio: "horizontal",
    },
]

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


//Slideshow Images On Mouse Move
artworkContainer.addEventListener("mousemove", () => {

    mouseCounter ++

    if( mouseCounter > 50 ){

        artworkImage.className = `artworkImage ${artworkImageList[indexOfImages].ratio}`
        artworkImage.src = artworkImageList[indexOfImages].source

        mouseCounter = 0

        if ( indexOfImages < artworkImageList.length ) {
            indexOfImages ++
        }

    }

    if ( indexOfImages === artworkImageList.length ){
        indexOfImages = 0
    }

    if( mouseCounter === 50 ){
        getArtworkCanvas.remove(); 
    }

})
