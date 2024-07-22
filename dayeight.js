// Activity 1 
// Task 1 
// var personsInfo = `Hi my name is Rafay and i'm 23`
// console.log(personsInfo);

// Task 2
// const str = 'rafay'
// const multiLine = `hey this is ${str} and ${str} doing some work ! `
// console.log(multiLine);
// console.log("string text line 1\n" + "string text line 2");

// Destructuring
// const userInfo = ['Rafay',23,'admin']
// const [name,age,role] = userInfo
// console.log(userInfo[0]);

// const userInfo = {
//   name:'Rafay',
//   age:23,
//   role:'admin'
// }
// const {name,age,role} = userInfo
// console.log(name);
// console.log(role);

// Activity 3
// Spread Operator

// const emptyArray = [4,5,7]
// const myArray = [1,2,3]
// const combinedArray = [...emptyArray,...myArray]
// console.log(combinedArray);

// Task 6 
// function SumArgs(a,b,...args) {
//   let sum = 0
//   let multi = a*b
// for (const num of args) {
//   sum+=num
// }
// return [sum,multi]
// }
// console.log(SumArgs(2,3,9,8));

// Default parameters
// function DefaultParams(a,b=5) {
//   return a*b
// }
// console.log(DefaultParams(2));
// console.log(DefaultParams(2,7));

// Activity 5 
// Object Literals
// let workingDays = ['monday','tuetstday','wed','thu','sat','sun'] 
// let employee = { 
//   id:101,
//   name:"Rafay",
//   role:"developer",
//   // workingDays,
//   greet() {
//    return(`${this.name} Welcome to the board ! `)
//   }
// }
// // console.log(employee);
// // console.log(employee.greet());
// console.log(employee.greet());
// console.log(employee);


// Task 9
let firstName = "John"
let lastName = "Doe"

let person = {}
person['firstName'] = firstName
person['lastName'] = lastName
console.log(person);  