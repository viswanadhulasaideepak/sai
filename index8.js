

let input= document.querySelector("input")
let button=document.querySelector("button")
let ol=document.querySelector("ol")

button.addEventListener("click",()=>{
    let inputValue=input.value
   // ol.innerText= inputValue

   //create element

   let li= document.createElement("li")

   li.innerText= inputValue

   li.style.fontSize= "40px"

   li.setAttribute("class", "active")

   // append

   ol.append(li)

   input.value= ""
   li.addEventListener("click",()=>{
   li.remove()
   })

})