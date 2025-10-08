// console.log("Hello World")

// 1 :Determine if a number is even or odd.

// const a = 7;

// if(a%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }


// 2: Find the Maximum of Two Numbers

// const a=5;
// const b=7;

// if(a>b){
//     console.log("a is bigger")
// }
// else{
//     console.log("b is bigger")
// }


// 3 : Check if a given year is a leap year

// const year = 2020

// if(year % 4 == 0){
//     console.log("it is a leap year")
// }
// else{
//     console.log("it is a normal year")
// }

// 4 : : Calculate the sum of the first n natural numbers.

// const n = 5
// let sum = 0

// for(let i=1;i<=n;i++){
//     sum+=i
// }

// console.log(`${sum} is sum of no`)

// 5 : Calculate factorial of a number.

// const num = 5
// let fact=1

// for(let i = 1;i<=num;i++){
//     fact*=i
// }
// console.log(fact)

//6 : print multipication table

// const num = 6

// for(let i=1;i<=10;i++){
//     console.log(`${num} X ${i} = ${num*i}`)
// }

// 7 : Reverse the digits of a number


// const num = 1234

//8:palidrome NO

// const num=313
// let temp = num
// let rev = 0

// while(temp>0){
//     let r = temp %10
//     rev = rev*10+r
//     temp = Math.floor(temp/10)
// }
// if(rev===num){
//     console.log("number is palimdrom")
// }else{
//     console.log("number is not palimdrome")
// }


// 9 : Check whether the input number is prime. 

// const no = 11
// let flag = false
// for(let i=2;i<no;i++){

//     if(no*i==0){
//         flag=true
//         break
//     }
// }
// if(!flag){
//     console.log("Number is prime");
// }
// else{
//     console.log("number is not prime");
// }

// 10 : Count how many digits a number contains

// const no = 12345
// let count= 0
// let temp=no
// while(temp>0){

//     temp = Math.floor(temp/10)
//     count++
// }
// console.log(`${count} digits in number`);

// 11 : Calculate the sum of all digits in a number

// const no = 123
// let sum = 0
// let temp = no

// while(temp>0){

//     let r = temp % 10
//     sum+=r
//     temp=Math.floor(temp/10
//     )
// }
// console.log(`${sum} is sum`)

// 12 : Check the Armstrong No

// const num = 370
// let temp = num
// let arm = 0

// const digits = num.toString().length

// while(temp>0){

//         let digit = temp % 10

//         arm += Math.pow(digit,digits)

//         temp = Math.floor(temp/10)
// }

// if(arm === num){
//         console.log(`${num} is an armstrong number`);
// }else{
//         console.log(`${num} is not an armstrong number`);
// }

// 13. Generate Fibonacci Series

// const num = 7
// let temp1 = 0
// let temp2 = 1

// console.log(`${temp1}`);
// console.log(`${temp2}`);

// for(let i=1;i<=num-2;i++){


//         const temp3 = temp1 + temp2
//         temp1 = temp2
//         temp2 = temp3

//         console.log(`${temp3}`);

// }


//14 : Check The vovel or not

// const input='c'

// if('aeiou'.includes(input)){

//     console.log(`${input} is vovel`)
// }else{

//     console.log(`${input} is constant`)
// }

//15 :  Simple Calculator

// const a = 4
// const b = 2
// const symbol = "*"

// switch (symbol) {
//         case "+":
//                 console.log(a+b);
//                 break;
//         case "-":
//                 console.log(a-b);
//                 break;  
//         case "*":
//                 console.log(a*b);
//                 break;
//         case "/":
//                 console.log(a/b);
//                 break;
// }

// 16. Find GCD (HCF)

// const number1 = 10
// const number2 = 15
// let GCD = 0

// const min = number1 >= number2 ? number2 : number1

// for(let i=1;i<=min;i++){
//     if(number1%i==0 && number2%i==0){
//         GCD = i
//     }
// }

// console.log(`GCD: ${GCD}`);

// 17. Check Perfect Number

// const number = 6
// let temp = 0
// for(let i=1;i<number;i++){

//     if(number%i===0){
//         temp+=i
//     }

// }

// if(number === temp){
//     console.log(`${number} is a perfect number`);
// }else{
//     console.log(`${number} is not a perfect number`);
// }

// 18. Print All Divisors

// const number = 10
// let divisors = ''

// for(let i=1;i<=number;i++){

//     if(number % i === 0){

//         divisors += i + ' '

//     }

// }

// console.log(`Divisiors of ${number}: ${divisors}`);

// 19. Number is Positive, Negative or Zero

// const number = -5

// if(number > 0){
//     console.log(`${number} is a positive number`);
// }else if(number < 0){
//     console.log(`${number} is a negative number`);
// }else{
//     console.log(`${number} is zero`);
// }


// 20. Find Power (Exponentiation)

// const number = 2
// const exponent = 4

// console.log(`${number}^${exponent}:${Math.pow(number,exponent)}`);


// const sum = require('./module_demo.js')

// import sum from './module_demo.js'

// console.log(sum(2,4));


import express from "express";
import { studentrouter } from "./studentroutes.js";

const app=express();

app.use(express.json())

app.use("/student",studentrouter)

app.listen(800,()=>{
        console.log("Server Is Running")
})

