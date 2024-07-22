// Activity 1 (Task 1)
// function EvenOdd(num) {
//   if (num % 2===0) {
//     return ('Number is Even')
//   }
//   else{
//     return('Number is Odd')
//   }
// }
// console.log(`${EvenOdd(8)}`);

//Activity One(Task Two) 
// function Square(num) {
//   return num*num
// }
// console.log(`The Square of a number is ${Square(6)}`);

// Activity Two 
// Task 3

// function checkingNumbers(numOne,numTwo) {
//   if (numOne > numTwo && numTwo < numOne) {
//    return ('Num One is Greater')
//   }
//   else{
// return('Num Two is Greater')
//   }  
// }
// console.log(checkingNumbers(6,7));

// function AddString(stringOne,stringTwo) {
//   return stringOne + ' ' + stringTwo
// }
// console.log(AddString('Rafay','Saqlain'));

// Activity 3 
// Arrow functions
// Sum =(numOne,numTwo)=>{
// return numOne + numTwo
// }
// console.log(Sum(4,3));

// specificString = () =>{
// let str = 'rafay'
// if (str.includes('a')) {
//   return true
// }
// else{
//   return false
// }
//   }
// console.log(specificString());

// Activity 4 (Task 7)

// Product = (numOne,numTwo)=>{
// numTwo = 6
// return numOne * numTwo
// }
// console.log(Product(5));

// Activity 4 (Task 8)

// greeting = (name,age) => {
// age = 18
// return(`Hi ${name} Greeting You age is ${age} `)
// }
// console.log(greeting('Rafay'));

// Actvity 5
// Higher Order Functions

  
// function callNTimes(func, n) {
//   for (let i = 0; i < n; i++) {
//     func(); 
//   }
// }

// function greet() {
//   console.log("Hello!");
// }

// callNTimes(greet, 5); 

// Task 10

// function compose(g,f) {
//   return function(value){
//     return g(f(value))
//   }
// }
// function Square(x) {
//   return x*x
// }
// function addOne(x) {
//   return x+1
// }
// const composedFunction = compose(Square,addOne)
// const result = composedFunction(5)
// console.log(result);


