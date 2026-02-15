//JavaScript Practice Tasks
//SECTION 1 – Date Object Tasks
//TASK 1 – Custom Digital Clock
//Create a live digital clock using:
//- new Date()
//- getHours()
//- getMinutes()
//- getSeconds()
//- setInterval()
//Format:
//Current Time: 14 : 05 : 09
//(Add leading zero if value < 10)
//A)
let date1= new Date()
console.log(date1);

let hours= date1.getHours()
console.log(hours);

let minutes= date1.getMinutes()
console.log(minutes);

let seconds= date1.getSeconds()
console.log(seconds);

setInterval(()=>{
    let time= new Date()
    let time1= time.toLocaleTimeString()
    console.log(time1);
    
},10000)

//TASK 2 – Find Current Day Name
//Use getDay()
//Array:
//["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//Print:
//Today is Friday

let days=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday",  "Saturday"]

let today= new Date().getDay()

console.log("Today is:",days[today]);

//TASK 3 – Age Calculator (Basic)
//let birthYear = 2003
//Use getFullYear()
//Print:
//Your age is 23
//A)
let birthyear = 2003
let curyear= new Date().getFullYear()
let age= curyear - birthyear
console.log("Your age is", age);

/*TASK 4 – Create Specific Date
Create:
15 August 2020
10:30:45 AM
Using:
- new Date()
- setFullYear()
- setMonth()
- setDate()
- setHours()
- setMinutes()
- setSeconds()
Print using:
toLocaleString()*/
//A)
let date111= new Date()
date111.setFullYear(2020)
date111.setMonth(8 - 1)
date111.setDate(15)
date111.setHours(10)
date111.setMinutes(30)
date111.setSeconds(45)
let datetime=date111.toLocaleString()
console.log(datetime);
console.log(date111);

/*SECTION 2 – setTimeout & setInterval
TASK 5 – Delayed Message
Use setTimeout()
After 3 seconds print:
Welcome Naveen */
//A)

setTimeout(()=>{
    console.log("Welcome Naveen");
    
},3000)

/*TASK 6 – Stop Interval After 5 Seconds
Output:
1
2
3
4
5
Stopped
Use:
- setInterval()
- clearInterval()*/
//A)
let count = 1
let interval=setInterval(()=>{
    console.log(count);
    if (count===5){
        clearInterval(interval)
        console.log("stopped");
    }
    count++
},1000)

/*SECTION 3 – Promise Practice
TASK 7 – Simple Promise
If number > 10 ® resolve("Valid number")
Else ® reject("Invalid number")
Handle using:
.then()
.catch()
.finally()*/
//A)
let number = 15;   // change this value to test

let promise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("Valid number");
  } else {
    reject("Invalid number");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise");
  });

/*SECTION 4 – Fetch API Task
TASK 8 – Fetch Product Prices
API:
https://fakestoreapi.com/products
Print only:
Product: <title>
Price: <price></price>*/
//A)
let api= "https://fakestoreapi.com/products"

fetch(api).then((data)=>{
   return data.json()    
})
.then((jsData)=>{
    jsData.forEach((curE, ind, totA)=>{
        console.log(curE.title);
        console.log(curE.price);   
    })
    
})
.catch((error)=>{
    console.warn(error.message);
    
})

.finally((r)=>{
    console.log(r);
    
})

/*SECTION 5 – Execution Order Task
function one(){
console.log("one");
}
function two(){
console.log("two");
}
function three(){
console.log("three");
}
one()
setTimeout(two,0)
three()
Predict Output and Explain Why.*/
//A)
//Output: 
//one
//three
//two
//for one, runs immediately because it goes to callstack and prints one
//for two, donot run secondly because it  goes to callstack and go to webapi and will
// be in a eventloop and after that ,goes to callback queue and again go to call stack , so due to setTimeout 
// it will wait for zero seconds so it will delay and three will be printed instead













