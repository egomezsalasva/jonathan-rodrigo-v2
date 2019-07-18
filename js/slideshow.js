//Selector
const prevPointerContainer = document.querySelector(".prevPointerContainer")
const nextPointerContainer = document.querySelector(".nextPointerContainer")
const prevCursor = document.querySelector(".prevCursor")
const nextCursor = document.querySelector(".nextCursor")
const numberNextCursor = document.querySelector(".numberNextCursor")
const totalNextCursor = document.querySelector(".totalNextCursor")
const numberPrevCursor = document.querySelector(".numberPrevCursor")
const totalPrevCursor = document.querySelector(".totalPrevCursor")


//Initialize variables for mouse and speed
let width50vw = parseInt(window.innerWidth / 2, 10)
let mouseX = 0
let mouseY = 0
let prevCursorX = 0 
let prevCursorY = 0
let nextCursorX = 0 
let nextCursorY = 0 
const speed = 0.075

//Functions
const animatePrev = () => {
    //position of mouse - positions of cursor (both 0 so equals to 0)
    let distX = mouseX - prevCursorX
    let distY = mouseY - prevCursorY
    //change value of cursor to small number to create delay
    prevCursorX = prevCursorX + (distX * speed)
    prevCursorY = prevCursorY + (distY * speed)
    //make it follow
    prevCursor.style.left = `${prevCursorX}px`
    prevCursor.style.top = `${prevCursorY}px`
    //make it follow constantly
    requestAnimationFrame(animatePrev)
}
const animateNext = () => {
    //position of mouse - positions of cursor (both 0 so equals to 0)
    let distX = mouseX - nextCursorX - width50vw
    let distY = mouseY - nextCursorY
    //change value of cursor to small number to create delay
    nextCursorX = nextCursorX + (distX * speed)
    nextCursorY = nextCursorY + (distY * speed)
    //make it follow
    nextCursor.style.left = `${nextCursorX}px`
    nextCursor.style.top = `${nextCursorY}px`
    //make it follow constantly
    requestAnimationFrame(animateNext)
}


animatePrev()
animateNext()


//Selectors and variable of first series 
const imgArtworkProject01 = document.getElementById("imgArtworkProject01")
//list of images of first series 
const imageListArtworkProject01 = [
    "./imgs/artworkProject01img01.png",
    "./imgs/artworkProject01img02.png",
    "./imgs/artworkProject01img03.png",
]
//counter of first series
let counterArtworkProject01 = 0



//Event Listeners Prev
prevPointerContainer.addEventListener("mousemove", (e) => {
    mouseX = e.pageX
    mouseY = e.pageY  
})
prevPointerContainer.addEventListener("mouseleave", () => {
    prevCursor.style.display = "none" 
})
prevPointerContainer.addEventListener("mouseenter", () => {
    prevCursor.style.display = "inline"
    prevCursor.style.textDecoration = "none"
    if(counterArtworkProject01 === 0){
        prevCursor.style.textDecoration = "line-through"
        // prevCursor.style.textDecorationColor = "chartreuse"
    }
})
//change photos and overline on click
prevPointerContainer.addEventListener("click", () => {
    //change image and take off overline if its greater than 0
    if( counterArtworkProject01 > 0) {
        counterArtworkProject01 --
        imgArtworkProject01.src = imageListArtworkProject01[counterArtworkProject01]
        prevCursor.style.textDecoration = "none"
    }
    //if counter reaches 0 add overline
    if(counterArtworkProject01 === 0){
        prevCursor.style.textDecoration = "line-through" 
    }
})



//Event Listeners Next
nextPointerContainer.addEventListener("mousemove", (e) => {
    mouseX = e.pageX
    mouseY = e.pageY  
})
nextPointerContainer.addEventListener("mouseleave", () => {
    nextCursor.style.display = "none"
})
nextPointerContainer.addEventListener("mouseenter", () => {
    nextCursor.style.display = "inline" 
    nextCursor.style.textDecoration = "none"
    if(counterArtworkProject01 === (imageListArtworkProject01.length - 1)){
        nextCursor.style.textDecoration = "line-through"
    }
})
//change photos and overline on click
nextPointerContainer.addEventListener("click", () => {
    //change image and take off overline if it reaches end of array
    if(counterArtworkProject01 < (imageListArtworkProject01.length - 1)){
        counterArtworkProject01 ++
        imgArtworkProject01.src = imageListArtworkProject01[counterArtworkProject01]
        nextCursor.style.textDecoration = "none"
    }
    //if counter reaches end of array add overline
    if(counterArtworkProject01 === (imageListArtworkProject01.length - 1)){
        nextCursor.style.textDecoration = "line-through" 
    }
})






