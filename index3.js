//Part 1- Logical & Ternary Operator
//Q1: Check whether a number is between 10 and 50 using logical AND.
//Input: let num = 25
//Output: "Valid Number" or "Invalid Number"
//A)
/*let num= 25
if(num > 10 && num < 50){
    console.log("Valid Number")
}else{
    console.log("Invalid Number")
}*/

//Q2: Check if a user is eligible to log in.
//Condition:
//username must be "admin"
//password must be "1234"
//Use logical AND.
//A)
/*let username= "admin"
let password= "1234" 
if(username=="admin" && password== "1234"){
    console.log("Eligible to login")
}else{
    console.log("Not Eligible")
}*/

//Q3:Using ternary operator.
//Check if a number is even or odd.
//A)
/*let num= prompt("Enter your number")
if(num%2==0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}*/

//Q4:What is the output?
//console.log((10==="10")||(5>2)&&!(3>1));
//Explain step by step.
//A)
/*console.log((10==="10")||(5>2)&&!(3>1))
console.log(10==="10") // step1 output: false
console.log((10==="10")||(5>2))// step2 output: true
console.log(3>1)// step3 output: true
console.log(!(3>1))// step4 output: false
console.log((5>2)&&!(3>1)) //step5 output: false
console.log((10==="10")||(5>2)&&!(3>1))// final output: false*/

//Part2- Type Conversion

//Q5: Find the output and explain:
//A)
/*console.log("5"+2)
console.log(typeof("5"+2))
//Output: 52, type: string
//here 52 acts as string
console.log("5"-2)
console.log(typeof("5"-2))
//Output: 3, type: number
//here 3 acts as number
console.log("5"*2)
console.log(typeof("5"*2))
//output: 10, type: number
//here 10 acts as number
console.log("5"/2)
console.log(typeof("5"/2))
//output: 2.5 type: number
//here 2.5 acts as number*/

//Q6: Convert the following into explicit conversion.
//let value= "100"
//-Convert to Number
//-Convert to Boolean
//A)
/*let value= "100"
console.log(Number(value))
console.log(typeof(Number(value)))
//Output: 100 changed to string
console.log(Boolean(value))
console.log(typeof(Boolean(value)))
//Output: True, 100 changed to boolean*/

//Q7: What will be the output?
//A)
/*console.log(Boolean(""))
//output: false
//reason: string is empty.
console.log(Boolean(" "))
//output: true
//reason: string is not empty, having a space.
console.log(Boolean(0))
//output: false
//reason: string is empty because it is 0.
console.log(Boolean([]))
//output: true
//reason: string is not empty, is an object.*/

//Part 3-Conditional Statements
//Q8: Write a program:
/*if marks >= 90-> Grade A
if marks >= 75 -> Grade B
if marks  >= 50 -> Grade c
Else -> fail
Use if else if*/
//A)
/*let marks= 82
if(marks>=90){
    console.log("Grade A");
}else if(marks>=75){
    console.log("Grade B");
}else if(marks>=75){
    console.log("Grade C");
}else{
    console.log("Fail")
}*/

//Q9:Traffic Signal Program using switch case:
/*"red"-> Stop
"yellow"-> Ready
"green"-> Go
Default-> Invalid signal*/
//A)
/*let trafficsignal= "green"
switch (trafficsignal) {
    case "red": console.log("Stop")
    break;
    case "yellow": console.log("Ready")
    break;
    case "green": console.log("Go")
    break;
    default:
        break;
}*/

//Q10: (Nested if): Check eligibility:
//Age>= 18
//Height>= 160
//Weight>=50
//if all true -> "Selected"
//Else -> show which condition failed.
//A)
/*let Age= prompt("Enter your age:")
let Height= prompt("Enter your height:")
let Weight= prompt("Enter your weight:")
if(Age>=18){
    if(Height>=160){
        if(Weight>=50){
            console.log("You are selected")
        }else{
            console.log("Weight is not sufficient")
        }
    }else{
        console.log("Height is not sufficient")
    }
}else{
    console.log("Age is not sufficient")
}*/

//Part 4- loops
//Q11: Print numbers from  1 to 20 using for loop.
//A)
/*for(i=1; i<=20; i++){
    console.log(i)
}*/

//Q12: Print only odd numbers from 1 to 20
//A)
/*for(i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i)
    }
}*/

//Q13: Using while loop:
// Print numbers from 10 to 1
//A)
/*let i=10
while(i>=0){
    console.log(i)
    i--
}*/

//Q14: Using do-while loop:
//Print nmubers from 1 to 5
//A)
/*let i= 1

do {
    console.log(i);

    i++;
}
while(i<=5);*/

//Q15: Using for-of loop:
//Print each character from:
//let word= "STACKLY"
//A)
/*let word="STACKLY"
for(let a of word){
    console.log(a)
}*/

//Q16:Using for-in loop:
//Print both key and value from:
/*let student={
name:"Arun",
course:"MERN"
duration:"6 months"
}*/
//A)
/*let student={
    name:"Arun",
    course:"MERN",
    duration:"6 months"
}
for(let a in student){
    console.log(student[a])
}*/

//Real-Time Questions
//RT-1:Login System 
//If username= "admin" AND password="1234"-> "Login Success"
//Else -> "invalid credentials"
//Use logical operator+ ternary
//A)
/*let username="admin"
let password="1234"
if(username==="admin" && password==="1234"){
    console.log("Login Success")
}else{
    console.log("Invalid Credentials")
}*/

//RT-2: Salary Bonus System
//if employee salary> 50000 AND experience> 3 years
//->Eligible for bonus
//A)
/*let employeesalary= prompt("Enter your salary:")
let experience= prompt("Enter your experience:")
if(employeesalary > 50000 && experience > 3){
    console.log("Eligible for bonus")
}else{
    console.log("Not eligible")
}*/

//RT-3: Shopping Discount
//if cart amount:
// >=5000-> 20% discount
// >=2000-> 10% discount
// 2000-> No discount
//A)
/*let cartamount= prompt("enter your amount:")
if(cartamount >= 5000){
    console.log("20% Discount")
}else if(cartamount >= 2000){
    console.log("10% Discount")
}else if(cartamount < 2000){
    console.log("No Discount")
}*/

//RT-4: Even or Odd counter
//Count how many even numbers between 1 to 50
//A)
/*let count= 0
for(i=1; i<=50; i++){
    if(i%2==0){
        count++
        console.log(i)
    }
}
console.log(count)*/

//RT-5: Dynamic Greeting System
//If hour between:
//1-6-> Good Morning
//7-12-> Morning
//13-16-> Good Afternoon
//17-19-> Good Evening
//Else-> Good Night
//A)
/*let hour= prompt("Enter the hour:")
if(hour>= 1 && hour<=6){
    console.log("Good Morning")
}else if(hour>=7 && hour<=12){
    console.log("Morning")
}else if(hour>= 13 && hour<= 16){
    console.log("Good Afternoon")
}else if(hour>=17 && hour<= 19){
    console.log("Good evening")
}else{
    console.log("Good Night")
}*/



