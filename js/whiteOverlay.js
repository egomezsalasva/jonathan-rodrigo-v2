///////////////////
// WHITE OVERLAY //
///////////////////


//Selectors
const imageWhiteOverlay = document.querySelector("#imgArtworkProject01")


//Initalize Timeline
const tlWhiteOverlay = new TimelineMax( { paused: true } )

//Add animations to timeline
tlWhiteOverlay.to(imageWhiteOverlay, 0, { zIndex: "2000" },)
                .to(".whiteOverlay", 0.4, { display: "block", opacity: 1 })
                .to(".projectContainer", 0, { zIndex: "1500"}, "-=0.4")
                .to(imageWhiteOverlay, 0.4, { scale: 1.15 }, "-= 0.4")
                        

imageWhiteOverlay.addEventListener('mouseenter', () => {
    tlWhiteOverlay.play()
})

imageWhiteOverlay.addEventListener('mouseleave', () => {
    tlWhiteOverlay.reverse()
})