
const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button=>{
    button.addEventListener("click",function(e){

        const x = e.clientX
        const y = e.clienty

        const buttontop = e.target.offsetTop
        const buttonleft = e.target.offsetLeft

        const xinside = x - buttonleft
        const yinside = y - buttontop

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yinside + "px"
        circle.style.left = xinside + "px"

        this.appendChild(circle)

        setTimeout(()=>circle.remove(), 500)




    })
})
