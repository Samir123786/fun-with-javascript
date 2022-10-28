const header = document.getElementById("header")
const title = document.getElementById("title")
const mini_title = document.getElementById("mini-title")
const profile = document.getElementById("profile")
const name = document.getElementById("name")
const namenew = document.getElementById("new")

const animated = document.querySelectorAll(".animated-bg")
const animated2 = document.querySelectorAll(".animated-bg-text")

setTimeout(getdata,4000)

function getdata(){
    let img = document.createElement("img")
    img.src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    header.append(img)

    title.innerText = "hell0 this is title"
    mini_title.innerText = "something here"

 let img2 = document.createElement("img")
 img2.src='https://images.unsplash.com/photo-1666475966635-f2a4a02fd107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80'
 profile.append(img2)
    
    name.innerText = "samir"
    namenew.innerText="i am websitedeveloper"
    animated.forEach((bg)=>bg.classList.remove("animated-bg"))
    animated2.forEach((bg2)=>bg2.classList.remove("animated-bg-text"))

}