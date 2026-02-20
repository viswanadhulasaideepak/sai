let input=document.querySelector("input")

function adds(ad){
    input.value += ad
}

function clr(){
    input.value = ""
}

function del(){
    input.value = input.value.slice(0,input.value.length-1)
}

function final(){
    input.value = eval(input.value)
}