const text= document.getElementById("text")
const speed = document.getElementById("speed")
const textwt = "please subscribe our youtube channel"
let idx = 1;
let totalspeed = 300/speed.value

writeText()


function writeText(){
text.innerText = textwt.slice(0,idx) + "|"
idx++

if(idx>textwt.length){
    idx=1;
}
setTimeout(writeText,totalspeed)


}

speed.addEventListener("input",(e)=>
totalspeed= 300/e.target.value
)
