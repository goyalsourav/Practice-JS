console.log("Practice");

//Variables
let fullName = "Sourav Goyal";
let currentYear = 2025;
let age = 27;

console.log("Full Name:", fullName);
console.log("Current Year:", currentYear);
console.log("Age:", age);

//Variables with Numbers
let num1 = 10;
let num2 = 5;

console.log("Sum:", num1+num2);
console.log("Difference:", num1-num2);
console.log("Product:", num1*num2);
console.log("Quotient:", num1/num2);

//Conditional Statement
// let marks = Number(prompt("Please enter your marks:"));

// if(marks >= 90){
//     console.log("Grade A");
// }else if(marks >= 75 && marks <=89){
//     console.log("Grade B");
// }else if(marks >= 50 && marks <= 74){
//     console.log("Grade C");
// }else {
//     console.log("Grade F");
// }

// let n = Number(prompt("Please enter the number:"));
// let sum = 0;

// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }

// console.log("Sum:", sum);

// let n = Number(prompt("Please enter the number:"));

// for(let i = 1; i <= 10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }

//let n = Number(prompt("Please enter the number:"));
// let inc = 0;
// while(inc <= (n-1)){
//     console.log(n-inc);
//     inc++;
// }

// while(n > 0){
//     console.log(n);
//     n--;
// }

//console.log(Math.floor(Math.random()*10) + 1);

// let secretNumber = Math.floor(Math.random()*10) + 1;

// let guess = Number(prompt("Guess the number between 1 to 10:"));

// while(guess !== secretNumber){
//     if(guess > secretNumber){
//         console.log("Too High! Try again.")
//     }else if(guess < secretNumber){
//         console.log("Too Low! Try again.");
//     }

//     guess = Number(prompt("Guess Again:"));
// }

// console.log("Correct! You guessed it!");

let n = Number(prompt("Please enter the number:"));

for(let i = 1; i <= n; i++){
    if(i%2 === 0){
        console.log(i, "Even");
    }else {
        console.log(i, "Odd");
    }
}

