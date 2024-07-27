// function createUniqueIdGenerator() {
//   let lastId = 0; // Closure to keep track of the last generated ID

//   return function() {
//     lastId++; // Increment the last ID
//     return lastId; // Return the new ID
//   };
// }

// const generateUniqueId = createUniqueIdGenerator();

// console.log(generateUniqueId());
// console.log(generateUniqueId());
// console.log(generateUniqueId());

// Task 4
// function UserName(){
//   let useraName = ' rafay'
//   function innerUser(){
//     console.log(`Hi ${useraName} Good Morning Greeting! `);
//   }
//   return innerUser
// }
// const user = UserName()
//  user()

// function loggingIndex(){
//   const myArray = [1,2,3,4,5,6,7,8,9,10]
//   return function(){
//     for (const num of myArray) {
//       console.log(`The index of ${num} is ${myArray.indexOf(num)}`);
//     }
//   }
// }
// const finalResult = loggingIndex()
// finalResult()

// function createFunctionArray() {
//   const functions = [];

//   for (let i = 0; i < 10; i++) {
//     functions.push((function(index) {
//       return function() {
//         console.log(index);
//       };
//     })(i));
//   }

//   return functions;
// }

// const functionArray = createFunctionArray();

// functionArray.forEach(func => func()); // This will log 0, 1, 2, ..., 9

// Activty 4 
// function collectionMain() {
//   let items = []
//   return {
//     addItem : function(item) {
//       items.push(item)
//       console.log(`Item is added ! ${item}`);
//     },
//     removeItem: function(item){
//       const index = items.indexOf(item)
//       if (index > -1) {
//         items.splice(item,1)
//         console.log(`Item Removed ${item}`);
//       }else {
//         console.log('Item not found');
//       }

//     },
//     listItems:function(){
//       console.log('total items are ',items);
//     }
//   }
// }
// const collection = collectionMain();
// collection.addItem('item1');
// collection.addItem('item2');
// collection.addItem('item3');
// collection.listItems();
// collection.removeItem('item1');
// collection.listItems();


function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Returning cached result');
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log('Computing result');
      return result;
    }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 

// Task 8 
function memoizeFactorial() {
  const cache = {};

  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (cache[n]) return cache[n];
    const result = n * factorial(n - 1);
    cache[n] = result;
    return result;
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(5)); 
