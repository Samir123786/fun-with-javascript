const btn =
 document.querySelectorAll("li");

 btn.forEach(button=>{
    button.addEventListener("click",
    ()=>{
        btn.forEach(newbtn=>
            newbtn.classList.remove("active"));
           button.classList.add("active")
    })
 })