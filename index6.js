//JavaScript Array & String Methods – Complete
//Professional Task Sheet
//SECTION 1 – Array Higher Order Methods Tasks
//Task 1 – forEach() Practice
//let subjects = ["Maths", "Science", "English", "History"]
//Requirements:
//• Use forEach()
//• Print Subject 1: Maths ... Subject 4: History
//• Store result in a variable
//• Question: Why does forEach() return undefined?
//A)
let subjects=["Maths", "Science", "English", "History"]
subjects.forEach((curE,ind,totA)=>{
    console.log(`Subject ${ind + 1}: ${curE}`);
    console.clear()
    
})

//Task 2 – map() Practice
//let prices = [100, 200, 300, 400]
//Requirements:
//• Use map()
//• Add 10% GST
//• Return new array
//• Expected Output: [110, 220, 330, 440]
//A)
/*let prices=[100,200, 300,400]
let newArray= prices.map((curE,Ind)=>{
    return curE + curE/100*10
})
console.log(newArray);*/

//Task 3 – filter() Practice
//let students = [
//{ name: "A", marks: 45 },
//{ name: "B", marks: 75 },
//{ name: "C", marks: 35 },
//{ name: "D", marks: 85 }
//]
//Requirements:
//• Use filter()
//• Get students scoring above 50
//• Print filtered array
//A)
let students=[
    {name: "A", marks: 45},
    {name: "B", marks: 75},
    {name: "C", marks: 35},
    {name: "D", marks: 85}
]
let filterStudents=students.filter((curE,ind,totA)=>{
    return (curE.marks > 50)
})
console.log(filterStudents);

//Task 4 – find() Practice
//Use same students array
//Requirements:
//• Use find()
//• Find first student scoring above 50
//• Print that object
//• Question: Difference between filter() and find()?
//A)
/*let students=[
    {name: "A", marks: 45},
    {name: "B", marks: 75},
    {name: "C", marks: 35},
    {name: "D", marks: 85 }
]
let firstStudent=students.find((curE,ind,totA)=>{
    return (curE.marks > 50)
})
console.log(firstStudent);*/

//Task 5 – reduce() Practice
//let cart = [
//{ item: "Shirt", price: 1000 },
//{ item: "Shoes", price: 2000 },
//{ item: "Watch", price: 3000 }
//]
//Requirements:
//• Use reduce()
//• Calculate total price
//• Bonus: Add 5% tax inside reduce()
//A)
let cart=[
    { item: "Shirt", price: 1000},
    { item: "Shoes", price: 2000},
    { item: "Watch", price: 3000}
]
let totalPrice=cart.reduce((acc,curE,ind,totA)=>{
    return (acc + curE.price - curE.price/100*5)
},0)
console.log(totalPrice);

//Task 6 – some() Practice
//let numbers = [1, 3, 5, 7, 8]
//Requirement:
//• Check if at least one number is even
//• Output: true
//A)
let numbers=[1,3,5,7,8]
let evenNumber=numbers.some((curE,ind,totA)=>{
    return (curE%2==0)
})
console.log(evenNumber);

//Task 7 – every() Practice
//let ages = [22, 25, 19, 30]
//Requirement:
//• Check if all ages are above 18
let ages=[22,25,19,30]
let aboveAge=ages.every((curE,ind,totA)=>{
    return (curE > 18)
})
console.log(aboveAge);

//Task 8 – sort() Practice
//let salaries = [50000, 10000, 70000, 30000]
//Requirements:
//• Sort ascending
//• Sort descending
//• Explain why normal sort() fails for numbers
//A)
let salaries=[50000,10000,70000, 30000]
let ascending=salaries.sort((a,b)=>{
    return a-b
})
console.log(ascending);

let descending=salaries.sort((a,b)=>{
    return b-a
})
console.log(descending);

//Task 9 – Array Conversion Methods
//let arr = [10, 20, 30, 40]
//Requirements:
//• Convert using toString()
//• Convert using join("-")
//• Expected Output: 10-20-30-40
//A)
let arr=[10,20,30,40]
let arr1=arr.toString()
console.log(arr1);
console.log(typeof(arr1));
let arr2=arr.join("-")
console.log(arr2);

//SECTION 2 – String Methods Tasks

//Task 10 – charAt() & charCodeAt()
//let word = "Developer"
//Requirements:
//• Get character at index 4
//• Get ASCII value of character at index 4
//A)
let word="Developer"
let word1=word.charAt(4)
console.log(word1);
let word2=word.charCodeAt(4)
console.log(word2);

//Task 11 – slice()
//let company = "StacklyCompany"
//Extract: Company
//A)
let company="StacklyCompany"
let company1=company.slice(7,14)
console.log(company1);

//Task 12 – Case Conversion
//let userInput = "javaScript"
//• Convert to uppercase
//• Convert to lowercase
//A)
let userInput="javaScript"
let user1=userInput.toUpperCase()
console.log(user1);
let user2=user1.toLowerCase()
console.log(user2);

//Task 13 – trim()
//let email = " naveen@gmail.com "
//Remove unwanted spaces
let mail=" naveen@gmail.com "
let mail1=mail.trim()
console.log(mail1);

//Task 14 – includes()
//let message = "Welcome to JavaScript Training"
//Check if "JavaScript" exists
//A)
let message="Welcome to JavaScript Training"
let message1=message.includes("JavaScript")
console.log(message1);

//Task 15 – split()
//let movie = "spider-man-no-way-home"
//Convert into array
//A)
let movie="spider-man-no-way-home"
let movie1=movie.split(" ")
console.log(movie1);

//Task 16 – indexOf() & lastIndexOf()
//let text = "programming"
//• Find first index of 'm'
//• Find last index of 'm'
//A)
let text="programming"
let firstIndex=text.indexOf("m")
console.log(firstIndex);
let secondIndex=text.lastIndexOf("m")
console.log(secondIndex);

//Task 17 – replace()
//let tech = "I love python"
//Replace python with javascript
//A)
let tech="I love python"
let tech1=tech.replace("python","javascript")
console.log(tech1);

//Task 18 – startsWith() & endsWith()
//let filename = "report.pdf"
//• Check if starts with "report"
//• Check if ends with ".pdf"
//A)
let filename= "report.pdf"
let name1=filename.startsWith("report")
console.log(name1);
let name2=filename.endsWith(".pdf")
console.log(name2);

//Task 19 – repeat()
//let star = "*"
//Print 10 stars using repeat()
let star="*"
let star1=star.repeat(10)
console.log(star1);

//FINAL TEAM CHALLENGE – Employee Report System
//let employees = [
//{ name: "Naveen", salary: 50000 },
//{ name: "Arun", salary: 30000 },
//{ name: "Kiran", salary: 70000 }
//]
//Requirements:
//• Convert names to uppercase using map()
//• Filter salary > 40000
//• Find first salary > 60000
//• Calculate total salary using reduce()
//• Sort salaries descending
//A)
let employees= [
    {name:"Naveen", salary:50000},
    {name:"Arun", salary: 30000},
    {name:"Kiran", salary:70000}
]
let upper=employees.map((curE,ind,totA)=>{
    return curE.name.toUpperCase()
})
console.log(upper);

let filter=employees.filter((curE,ind,totA)=>{
    return curE.salary > 40000
})
console.log(filter);

let findsal=employees.find((curE,ind,totA)=>{
    return curE.salary > 60000
})
console.log(findsal);

let totsal=employees.reduce((acc,curE,ind,totA)=>{
    return acc + curE.salary
},0)
console.log(totsal);

let descendingsal=employees.sort((a,b)=>{
    return b.salary -a.salary
})
console.log(descendingsal);














