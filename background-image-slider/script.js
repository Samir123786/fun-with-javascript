const slider = document.querySelectorAll(".slide")
const left = document.getElementById("left")
const right = document.getElementById("right")
const body = document.body
let activeslide = 0

function backgoundimg(){
body.style.backgroundImage=
slider[activeslide].style.backgroundImage
}
backgoundimg()

function setactiveslide(){
    slider.forEach((slide)=>slide.classList.remove("active")
        
    )
    slider[activeslide].classList.add("active")
}

right.addEventListener("click",()=>{
    activeslide++
    if(activeslide > slider.length-1){
        activeslide=0
    }
    backgoundimg()
    setactiveslide()
})
left.addEventListener("click",()=>{
    activeslide--
    if(activeslide <0){
        activeslide=slider.length-1
    }
    backgoundimg()
    setactiveslide()
})