console.log("Practice");

//Variables
let fullName = "Sourav Goyal";
let currentYear = 2025;
let age = 27;

console.log("Full Name:", fullName);
console.log("Current Year:", currentYear);
console.log("Age:", age);

//Variables with Numbers
// let num1 = 10;
// let num2 = 5;

// console.log("Sum:", num1+num2);
// console.log("Difference:", num1-num2);
// console.log("Product:", num1*num2);
// console.log("Quotient:", num1/num2);

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

// let n = Number(prompt("Please enter the number:"));

// for(let i = 1; i <= n; i++){
//     if(i%2 === 0){
//         console.log(i, "Even");
//     }else {
//         console.log(i, "Odd");
//     }
// }

// String Manipulation (reverse the string)

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Hello"));

// function reverseString(str){
//     let reversedString = "";

//     for(let i = str.length-1 ; i >= 0 ; i--){
//         reversedString += str[i];
//     }

//     return reversedString;
// }

// console.log(reverseString("sourav"));

// Array Sum

// function sumArray(arr){
//     let sum = 0;
//     for(let n of arr){
//         sum += n;
//     }
//     return sum;
// }

// console.log(sumArray([1,2,3,4,5,10]));

// largest number in the array

// let numbers = [12,190,2,450,70,3,16,35];

// let largestNumber = numbers[0];

// for(let i = 1 ; i < numbers.length ; i++){
//     if(largestNumber < numbers[i]){
//         largestNumber = numbers[i];
//     }
// }

// console.log(largestNumber);

// let largestNum = Math.max(...numbers);
// console.log(largestNum);

// let str = "My name is sourav goyal.";
// console.log(str.replaceAll(" ", "-"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// function welcomeMsg(name){
//     return `Hello ${name}, Welcome to the Frontend Developing.`;
// }

// console.log(welcomeMsg("Sourav")); 

// let arr = [1,8,3,4];

// const out = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr ;
// })

// console.log(out);

// function double(arr){
//     return arr.map(num => num*2);
// }

// console.log(double([1,2,3,4]));

//Count Vowels

// function countVowels(str){
//     let vowels = "aeiou";
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Helloo World"));

// Prime Number

// function findPrime(n){
//     if(n<2) return false;
//     for(let i = 2; i < Math.sqrt(n) ; i++){
//         if(n%i === 0) return false;
//     }
//     return true;
// }

// console.log(findPrime(10));

//Object

// let car = {
//     make : "Toyota",
//     model : "Fortuner",
//     year : 2025
// };

// console.log(car.make);

// function objPrint(obj){
//     for(let key in obj){
//        console.log(`${key}: ${obj[key]}`);
//     }
// }

// objPrint(car);

// function longestWord(sentence) {
//   let words = sentence.split(' ');
//   let longest = "";
//   for (let word of words) {
//     let cleanWord = word.replace(/[^a-zA-Z]/g, "");
//     if (cleanWord.length >= longest.length) {
//       longest = cleanWord;
//     }
//   }
//   return longest;
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog"));
// // Output: "jumps"

