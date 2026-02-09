// INTERMEDIATE LEVEL- FUNCTIONS FULL ASSIGNMENT
// SECTION 1- REAL TIME FUNCTION LOGIC
//1. Payroll System:
//Create calculateSalary(basicSalary, bonusPercentage)
//-Calculate bonus
//- Deduct 5% tax
//- Return  final salary
//A)
/*let basicSalary= prompt("Enter basic salary:")
let bonusPercentage= prompt("Enter bonus percentage:")
function calculateSalary(basicSalary, bonusPercentage){
    let bonus=(bonusPercentage/100)*basicSalary
    let grossSalary= basicSalary+bonus
    let tax= (5/100)*grossSalary
    let finalSalary= grossSalary-tax
    return finalSalary
}
let finalSalary= calculateSalary(basicSalary, bonusPercentage)
console.log(finalSalary)*/

//2. Student Result System:
//Create generateResult(name, marksArray)
//-Calculate total
//-Calculate average
//- Decide Grade (A/B/C/Fail)
//- Return result object
//A)
/*let name = "deepak"
let marksArray=[73,85,94]
function generateResult(name, marksArray){
    let total=0
    for(let  i=0; i<marksArray.length; i++){
        total=total+marksArray[i]
    }
    let average= total/marksArray.length
    let grade=""
    if(average>=90){
        grade="A"
    }
    else if(average>=80){
        grade="B"
    }
    else if(average>=70){
        grade="C"
    }
    else{
        grade="Fail"
    }
    let result = {
        name: name,
        total: total,
        average: average,
        grade: grade
    }
    return result
}
let result= generateResult(name, marksArray)
console.log(result)*/

//SECTION 2-Scope & Hoisting(Debugging)
//3. Debug this code:
function demo(){
    if(true){
        var a= 10
        let b= 20
    }
    console.log(a)
    console.log(b)
}
demo()
//A)
//- What will happen
// a will be printed as 10 and b will be printed as reference error
//- Why?
// a is declared with var keyword and is a function scope and  globalscope , so can access outside the block and
//b is declared with keyword let and is  a block scoped , so it is not accessible outside the block
//-Fix it properly

/*function demo(){
    if(true){
        var a= 10
        let b=20
    }
    console.log(a)
    console.log(b)
}
demo()*/

//4. Hoisting Analysis:
/*console.log(x)
var x= 5

console.log(y)
let  y= 200*/
//Predict output and explain.
//A)
/*console.log(x)
var x= 5

console.log(y)
let  y= 200*/

//x will printed as undefined because of hoisting using var keyword
//y will give reference error beacuse  of hoisting using let keyword

//SECTION 3- Callback & Higher  Order(Industry Simulation)
//5. Order Processing System:
//Create processOrder(orderId, callback)
//-Print"Order Processed"
//-Call generateInvoice(orderId)
//A)
/*function processOrder(orderId, callback){
    console.log("order processed")
    callback(orderId)
}
function generateInvoice(orderId){
    console.log("invoice generated for orderId:", orderId)
}
processOrder(86,generateInvoice)*/

//6. Bank Transaction System:
// Create transaction(amount, type, callback)
//-if deposit->add
//-if withdraw-> subtract
//-Call sendSMS()
//A)
/*function transaction(amount, type, callback){
    let balance= 500
    if(type==="deposit"){
        balance= balance+amount
    }
    else if(type==="withdraw"){
        balance= balance-amount
    }
    callback(balance)
}
function sendSMS(balance){
    console.log("SMS sent with updated balance:", balance)
}
transaction(200, "deposit", sendSMS)*/

//SECTION 4- Currying (E-commerce)
//7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
//- Return final price
//Example: priceBuilder(2000)(15)(18)
//A)
/*function pricebuilder(baseprice){
    return function(discount){
        return function(tax){
            let discountedPrice= baseprice-(discount/100)*baseprice
            let finalPrice= discountedPrice+(tax/100)*discountedPrice
            return finalPrice
        }
    } 
}
let finalPrice=pricebuilder(2000)(15)(18)
console.log(finalPrice)*/

//SECTION 5- IIFE(Security + Encapsulation)
//8. Secure Company Module:
//- Store private variable companyCode
//-Expose getCommpanyStatus()
//-companyCode should not be directly accessible
//A)
/*const companyModule= (function(){
    let companyCode= "SAI123"
    return {
        getCompanyStatus: function(){
            return companyCode
        }
    }
})()
console.log(companyModule.getCompanyStatus())*/

//SECTION 6- Generator (Advanced Logic)
//9.Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.
//A)
/*function* orderIDGenerator(){
    let id=1001
    while(true){
        yield "ORD"+ id
        id++
    }
}
const generator= orderIDGenerator()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)*/

//10. Coupon Spin System:
//Yield:
//- 10% OFF
//- 20% OFF
//- 30% OFF
//- No luck
//- Jackpot
//Simulate multiple spins
//A)
/*function* couponSpin(){
    yield "10% OFF"
    yield "20% OFF"
    yield "30% OFF"
    yield "No luck"
    yield "Jackpot"
}
const spin= couponSpin()
console.log(spin.next().value)
console.log(spin.next().value)
console.log(spin.next().value)
console.log(spin.next().value)
console.log(spin.next().value)*/

//SECTION 7- Mini Project(Integrated)
//Mini E-Commerce Flow:
// addToCart(product, price)
//- calculateTotal()
//- applyDiscount() using currying
//- generateCoupon() using generator
//-processPayment() using callback
//- Hide config using IIFE
//A)
/*function addToCart(product, price){
    let cart= []
    cart.push({product, price})
    return cart
}
function calculateTotal(cart){
    let total=0
    for(let i=0;i<cart.length; i++){
        total= total+ cart[i].price
    }
    return total
}
function applyDiscount(discount){
    return function(total){
        return total-(discount/100)*total
    }
}
function* generateCoupon(){
    yield "10% OFF"
    yield "20% OFF"
    yield "30% OFF"
    yield "No luck"
    yield "Jackpot"
}
function processPayment(total, callback){
    console.log("Payment processed for amount:", total)
    callback()
}
const cart= addToCart("Laptop", 50000)
const total= calculateTotal(cart)
const discountFunc= applyDiscount(10)
const discountedTotal= discountFunc(total)
const couponGen= generateCoupon()
console.log("Generated Coupon:", couponGen.next().value)
processPayment(discountedTotal, function(){
    console.log("Callback: Payment successful")
})*/

//Concept Questions:
//1. Difference between function declaration and  expression?
//A)Function declaration is a named function, defined using funcion keyword.
//Function expression is an anonymous function assigned to a variable.

//2.What is higher order function?
//A) Ahigher order function is a function that takes another function as an argument or returns a function as a result.

//3. Real-time example of generator?
//A) A real-time example of a generator is an order ID generator in an e-commerce system, 
// which generates unique order IDs sequentially each time a new order is placed.

//4.Why do we use IIFE?
//A) We use IIFE to create a new scope and avoid polluting the global namespace.

//5.Difference between var, let and const?
//A) var is function scope and golbal scope, can be updated and redeclared. 
// let is block scope and can be updated but not redeclared. 
// const is block scoped and cannot be updated or redeclared.