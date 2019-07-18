//Dependencies
// drawArtwork L.157

//Selectors
const artworkContainer = document.querySelector(".artworkLeftContainer") 
const artworkImage = document.querySelector(".artworkImage") 


//Initialize Counters
let indexOfArtworkImages = 1
let mouseCounter = 0


//Artwork Image List
const artworkImageList = [
    {
        source: "./imgs/artwork01.png",
        ratio: "horizontal",
    },
    {
        source: "./imgs/artwork02.png",
        ratio: "horizontal",
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


//Slideshow Images On Mouse Move
artworkContainer.addEventListener("mousemove", () => {

    //Track Pixels moved by mouse
    mouseCounter ++

    //Every X pixels change image and dimensions - When it reaches 50 initialize(for loop could work) 
    if( mouseCounter > 50 ){

        // artworkImage.className = `artworkImage ${artworkImageList[indexOfArtworkImages].ratio}`
        artworkImage.src = artworkImageList[indexOfArtworkImages].source
        //Animate change dimension
        if( artworkImageList[indexOfArtworkImages].ratio === "horizontal" ){
            //TweenMax.from(artworkImage, 0.1, { filter: "blur(1px)" });
            // TweenMax.to(".artworkBackgroundImage", 0.3, { width:"34.375vw", height:"22.7164062vw" });
            // TweenMax.from(artworkImage, 0.3, { opacity: 0 }).delay(0.3);
            TweenMax.to(artworkImage, 0.3, { width:"34.375vw", height:"22.9164062vw", objectFit: "cover" });
        }
        if( artworkImageList[indexOfArtworkImages].ratio === "vertical"){
            //TweenMax.from(artworkImage, 0.1, { filter: "blur(1px)" });
            // TweenMax.to(".artworkBackgroundImage", 0.3, {  width:"18.75vw", height:"28.125vw"});
            // TweenMax.from(artworkImage, 0.3, { opacity: 0 }).delay(0.3);
            TweenMax.to(artworkImage, 0.3, { width:"18.75vw", height:"28.125vw", objectFit: "cover"  });
        }
        //Initialize when reached to 50px
        mouseCounter = 0
        //Pass to next image in array
        if ( indexOfArtworkImages < artworkImageList.length ) {
            indexOfArtworkImages ++
        }

    }

    //If it reaches end of array restart
    if ( indexOfArtworkImages === artworkImageList.length ){
        indexOfArtworkImages = 0
    }

    // if( mouseCounter === 50 ){
    //     getArtworkCanvas.remove(); 
    // }


})

