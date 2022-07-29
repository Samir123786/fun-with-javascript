const box =document.querySelector
(".box");
const btn = document.querySelector
(".btn");

const closed = document.querySelector
(".close");


btn.addEventListener("click",
()=>{
    box.style.display="block";
})
closed.addEventListener("click",
()=>{
    box.style.display="none";
})
window.addEventListener("click",
(e)=>{
    if(e.target===box)
    box.style.display="none";
})