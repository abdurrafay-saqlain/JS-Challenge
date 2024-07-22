const prompt = require("prompt-sync")();
// Activity One (Task One)
// const numberOne = 5;
// const numberTwo =6;
// console.log(numberOne + numberTwo);

// Activity One (Task two)
// const numberOne = prompt("Enter the first number ")
// const numberTwo = prompt("Enter the number Two ")
// console.log(`The result is ${numberOne - numberTwo}`);

// Activity One (Task 3)
// const numberOne = prompt("Enter the first number ")
// const numberTwo = prompt("Enter the number Two ")
// console.log(`The result is ${numberOne * numberTwo}`);

// Activity One (Task 4)
// const numberOne = prompt("Enter the first number ")
// const numberTwo = prompt("Enter the number Two ")
// console.log(`The result is ${numberOne / numberTwo}`);

// Activity One (Task 5)
// const numberOne = prompt("Enter the first number ")
// const numberTwo = prompt("Enter the number Two ")
// console.log(`The result is ${numberOne % numberTwo}`);

// Activity Two (Assignment Operators)
// let numberOne= 5
// console.log(numberOne+= 4);

// let numberTwo=6
// console.log(numberTwo-=5);

// // Activity Three (Comparision Operators)

// function compareNumbers (numberOne,numberTwo){
// if (numberOne < numberTwo) {
//   console.log(`${numberTwo} is less then ${numberOne}`);
// }
// else{
//   console.log(`${numberOne} is greater then ${numberTwo}`);
// } 
//  }
//  compareNumbers(7,3)

// Activity Three (Task two)
//  function compareNumbers (numberOne,numberTwo){
//  if (numberOne >= numberTwo) {
//    console.log(`${numberTwo} is less then ${numberOne}`);
//  }
//  else{
//    console.log(`${numberTwo} is greater then ${numberOne}`);
//  } 
//   }
//   compareNumbers(8,7)
// Activity Three (Task 9)

//  function compareNumbers (numberOne,numberTwo){
//  if (numberOne <= numberTwo) {
//    console.log(`${numberOne} is less then ${numberTwo}`);
//  }
// else{
//   console.log(`${numberTwo} is equal  ${numberOne}`);
// }
//   }
//   compareNumbers(7,7)

// Activity Three (Task 10 ) 

// function compareNumbers (numberOne,numberTwo){
// if (numberOne === numberTwo) {
//   console.log(`${numberTwo} is equal  ${numberOne}`);
// }
//  else{
//   console.log(`${numberTwo} is not  equal ${numberOne}`);
//   }
// }

//  compareNumbers(7,5)

//  function compareNumbers (numberOne,numberTwo){
//  if (numberOne == numberTwo) {
//    console.log(`${numberTwo} is equal  ${numberOne}`);
//  }
//   else{
//    console.log(`${numberTwo} is not  equal ${numberOne}`);
//    }
//  }
//   compareNumbers(7,5)

// Activity 4 (Task 11)
// function compareNumbers(numberOne,numberTwo){
//   if (numberOne > numberTwo && numberOne !=0) {
//     console.log(`${numberOne} and ${numberTwo} are not equal and non-zero.`);
//   }
//   else{
//     console.log(`Condition not met. Either ${numberOne} is not greater than ${numberTwo} or ${numberOne} is not an even number.`);
//   }

// }
// compareNumbers(7,5)
// compareNumbers(8,5)
// compareNumbers(8,10)

// Activity 4 (Task 12)
//  function compareNumbers(numberOne,numberTwo){
//    if (numberOne === numberTwo || numberOne !=0) {
//      console.log(`${numberOne} and ${numberTwo} are equal and non-zero.`);
//    }
//    else{
//      console.log(`Condition not met. Either ${numberOne} is not greater than ${numberTwo} or ${numberOne} is not an even number.`);
//    }

// }
// //  compareNumbers(7,7)
//  compareNumbers(0,0)
// //  compareNumbers(8,10)

// Activity 4 (Task 13)
//  function compareNumbers(numberOne){
//    if (numberOne !=0) {
//      console.log(`${numberOne} is not equal to zero `);
//    }
//    else{
//      console.log(`${numberOne} is equal to zero`);
//    }

// }
//  compareNumbers(0)

// Activity 5 (Task 14 )
// function checkingNumber(num){
//   return num > 0 ? 'positive' : 'negative'
// }
// console.log(checkingNumber(-9));

// Feature Request
// function Calculate(operator, numOne, numTwo) {
//   if (operator === '+') {
//     return numOne + numTwo;
//   }
//   if (operator === '-') {
//     return numOne - numTwo;
//   }
//   if (operator === '/') {
//     return numOne / numTwo;
//   }
//   if (operator === '*') {
//     return numOne * numTwo;
//   }
//   // Handle modulus
//   if (operator === '%') {
//     return numOne % numTwo;
//   }
//   return 'Invalid operator';
// }

// console.log(Calculate('+', 6, 8)); 
// console.log(Calculate('-', 3, 3)); 
// console.log(Calculate('*', 4, 8)); 
// console.log(Calculate('/', 6, 8)); 
// console.log(Calculate('%', 4, 2)); 

// Feature Request (Task Two)
// function comparingNumbers(num1, num2) {
//   if (num1 === num2 || num1 > num2) {
//     console.log(`${num1} is equal to or greater than ${num2}.`);
//   } else {
//     console.log(`${num1} is less than ${num2}.`);
//   }
// }

// comparingNumbers(8, 8); 
// comparingNumbers(9, 8); 
// comparingNumbers(7, 8); 

// Feature Request (Task 3)
  
// function numbers(num){
// return num > 0 ? 'positive': 'negative'
// }
// console.log(numbers(8));