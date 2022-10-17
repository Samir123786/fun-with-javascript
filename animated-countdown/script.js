const number =
 document.querySelectorAll(".nums span")
 
const counter =
 document.querySelector(".counter")
const final =
 document.querySelector(".final")
const replay =
 document.querySelector("#replay")


 runanimation()


 function runanimation(){
number.forEach((num,idx)=>{
const nexttolast = number.length-1

num.addEventListener("animationend",(e)=>{
    if(e.animationName === "goin" && idx !==nexttolast){
        num.classList.remove("in")
        num.classList.add("out")
    }
    else if(e.animationName === "goout" && num.nextElementSibling){
        num.nextElementSibling.classList.add("in")
    }
    else{
        counter.classList.add("hide")
        final.classList.add("show")
    }
})

})



 }

function resetbtn(){
    counter.classList.remove("hide")
    final.classList.remove("show")
    number.forEach(num=>{
        num.classList.value=""
    })
    number[0].classList.add("in")
}
replay.addEventListener("click",()=>{
   resetbtn()
   runanimation()

})