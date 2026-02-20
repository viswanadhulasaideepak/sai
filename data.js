let api="https://fakestoreapi.com/products"

fetch(api)
.then((data)=>{
    //console.log(data);
    return data.json()
    
})

.then((jsdata)=>{
    console.log(jsdata );
    jsdata.forEach((curE,ind,totA)=>{
        //console.log(curE)
        //console.log(curE.title);
        let title=document.querySelector(".title")
        //title.innerHTML=curE.title

        let all=document.createElement("div")
        all.innerHTML=`<h2>${curE.title}</h2>
        <img src=${curE.image}>`

        title.append(all)
    })
    
})

.catch((error)=>{
    
    let errorDiv = document.querySelector(".error1")

    console.log(error);

    if(errorDiv){
        let allError= document.createElement("div")
        allError.innerHTML=`<h1>${error}</h1>`
        errorDiv.append(allError)
    }
    
})

.finally((r)={
    
})