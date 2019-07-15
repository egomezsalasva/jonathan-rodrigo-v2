
//Selectors
const commercialContainer = document.querySelector(".commercialRightContainer") 
const commercialImage = document.querySelector(".commercialImage") 
// const getcommercialCanvas = document.getElementById("commercialCanvas");

//Initialize Counters
let indexOfCommercialImages = 1
let mouseCounterCommercial = 0

//Commercial Image List
const commercialImageList = [
    {
        source: "./imgs/commercial01.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial02.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial03.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial04.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial05.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial06.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial07.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial08.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial09.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial10.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial11.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial12.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial13.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial14.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial15.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial16.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial17.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial18.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial19.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial20.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial21.png",
        ratio: "horizontal"
    },
    {
        source: "./imgs/commercial22.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial23.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial24.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial25.png",
        ratio: "vertical"
    },
    {
        source: "./imgs/commercial26.png",
        ratio: "vertical"
    },
]


//Slideshow Images On Mouse Move
commercialContainer.addEventListener("mousemove", () => {

    mouseCounterCommercial ++

    if( mouseCounterCommercial > 50 ){

        // commercialImage.className = `commercialImage ${commercialImageList[indexOfCommercialImages].ratio}`
        commercialImage.src = commercialImageList[indexOfCommercialImages].source
        //Animate change dimension
        if( commercialImageList[indexOfCommercialImages].ratio === "horizontal" ){
            //TweenMax.from(commercialImage, 0.1, { filter: "blur(1px)" });
            //TweenMax.to(".commercialBackgroundImage", 0.4, { width:"34.375vw", height:"22.9164062vw" });
            // TweenMax.to(".commercialBackgroundImage", 0.4, { width:"34.375vw", height:"22.7164062vw" });
            // TweenMax.from(commercialImage, 0.4, { opacity: 0 }).delay(0.4);
            TweenMax.to(commercialImage, 0.4, { width:"34.375vw", height:"22.9164062vw", objectFit: "cover" });
        }
        if( commercialImageList[indexOfCommercialImages].ratio === "vertical"){
            //TweenMax.from(commercialImage, 0.1, { filter: "blur(1px)" });
            // TweenMax.to(".commercialBackgroundImage", 0.4, { width:"18.75vw", height:"28.125vw" });
            // TweenMax.from(commercialImage, 0.4, { opacity: 0 }).delay(0.4);
            TweenMax.to(commercialImage, 0.4, { width:"18.75vw", height:"28.125vw", objectFit: "cover"  });
        }

        mouseCounterCommercial = 0

        if ( indexOfCommercialImages < commercialImageList.length ) {
            indexOfCommercialImages ++
        }

    }

    if ( indexOfCommercialImages === commercialImageList.length ){
        indexOfCommercialImages = 0
    }

})