alert()

//Internship Assignment – JavaScript (var, let, const)
//SECTION A:
//1. What is the difference between var, let, and const?
//A) Using var, we can redeclare, reuse the variable. Using let, we can reinitialization the variable but cannot redeclare. Using const, we cannot redeclare and reuse the variable.
//2. Which keyword allows redeclaration and why?
//A) Var keyword allows redeclaration because let keyword allows only reusing and const keyword doesnot allow both reinitialization and redeclaration.
//3. Which keyword allows reinitialization?
//A) Var and Let keywords allow reinitialization.
//4. Which keyword does not allow redeclaration and reinitialization?
//A) Const keyword does not allow redeclaration and reinitialization.
//5. Why should const be used for fixed values?
//A) Const is used for fixed values because, it does not support redeclaration and reinitialization.
//6. What error occurs when redeclaring a let variable?
//A) Syntax error occurs when redeclaring a let variable.
//7. What error occurs when reassigning a const variable?
//A) Type error occurs when reassigning a const variable.
//8. Which keyword is preffered in modern JavaScript and why?
//A) Const keyword is preffered in modern JavaScript because it does not support redeclaration and reinitialization.
//9. Can const be declared without initialization? Explain.
//A) No, const cannot be declared without initialization because it should assign a value at the time of declaration.
//10. When should var be avoided?
//A) Var should be avoided in modern JavaScript.
//SECTION B:
//11. Predict the output:
var a= 10;
a=20;
var a= 30;
console.log(a);
//A) Console.log(a) :- 30
//12.Predict the output:
let b= 5;
b= 15;
console.log(b);
//A) Console.log(b):- 15
//13. Identify the error:
//let i= 10;
//let i= 20;
//console.log(i);
//A) Syntax Error.
//14. Identify the error:
//const y= 50;
//y=100;
//console.log(y);
//A) Type Error.
//15. Write a program using var to redeclaration.
//A)
var a= 25;
var a= 50;
console.log(a);
//Output:
//console.log(a):- 50
//16. Write a program using let to show reinitialization.
//A) 
let z= 75;
z= 100;
console.log(z);
//Output:
//console.log(b):- 100
//17.Write a program using const and explain why value cannot change.
//A)
const c= 125;
console.log(c);
//Output:
//Console.log(c):- 125
//Because its having a constant or fixed value.
//18. Convert var to let where applicable.
//A) 
//var e= 200;
//let e= 200;
//console.log(e);
//Output:
//syntax error, already e has been declared.
//19. Convert var to const where applicable.
//A) 
//var d= 150;
//const d= 150;
//console.log(d);
//Output:
//syntax error, already d has been declared.
//20. Write your own example for var, let, and const.
//A) var:
var f=225;
f=250;
var f= 275;
console.log(f);
//Output:
//Console.log(f):- 275
//let:
let g= 300;
g= 375;
console.log(g);
//Output:
//console.log(g):- 375
//const:
const h= 400;
console.log(h);
//Output:
//console.log(h):- 400