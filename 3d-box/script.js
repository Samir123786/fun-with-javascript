const btn = document.getElementById("btn")
const boxes =document.getElementById("boxes")

btn.addEventListener("click",()=>{
    boxes.classList.toggle("big")
})

function createbox(){
    for(let i=0; i<4;i++){
        for(let j=0;j<4;j++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition=
            ` ${-j*125}px ${-i*125}px `
            boxes.append(box);
        }
    }
}
createbox()