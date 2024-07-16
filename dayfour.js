// Activty 1 (Task 1)
// for (let i = 0; i < 10; i++) {
//   // const element = array[i];
//   console.log(i);
// }

// Activity Two(Task two)
// for (let index = 1; index < 11; index++) {
// const result = 5*index
// console.log(result);  
// }

// Activity Two (while loop)
// let n=0;
// let x=1;
// while (n <= 10) {
//   n++
//   x+=n
//   console.log(x);
// }

// Activity 2 (Task 4)
// let count =11
// while (count >=1) {
//   count--
//   console.log(count);
// }

// Activity 3 (do while loop)
// let x = 0;
// let result='' ;

// do {
// x++  
// result = result + x

// } while (x<5);
// console.log(result);

// task 6
// function factorial(x) {
//   if (x == 0 || x==1) {
//     return 1
//   }
//   var result = x;
//   do {
//     result = result * (x-1)
//     x = x-1
//   } while (x > 1);
//   return result
// }
// console.log(factorial(6));

// Activity 4 Nested Loops 
// let n = 6;
// let string = '';

// for (let i = 1; i <= n; i++) {
//     string = '';

//     for (let j = 1; j <= i; j++) {
//         string += '*'; 
//     }

//     string += "\n"; 
//     console.log(string);
// }

// for (let i = 1; i <=10; i++) {
// if (i == 5) {
//   console.log('5 is Detected');
//   continue
// }  
// console.log(`value is ${i}`);
// }

// for (let i = 1; i <=10; i++) {
// if (i == 7) {
//   console.log('7 is Detected');
//   break
// }  
// console.log(`value is ${i}`);
// }

// Feature Request

// for (let index = 0; index <=10; index++) {
// console.log(index);  
// }

// for (let index = 1; index <=10; index++) {
// console.log(`The table of 5 is : ${5*index}`);
// }

// nested loops
// let n = 6;
// let string = '';

// for (let i = 1; i <= n; i++) {
//     string = '';

//     for (let j = 1; j <= i; j++) {
//         string += '*';  //     }

//     string += "\n"; 
//     console.log(string); 
// }


// let sum = 0;
// let count = 1;

// while (count <= 10) {
    
//     sum += count;
    
//     count++;
// }

// console.log(`The sum of the 10 numbers is: ${sum}`);
// Task 5 (feature Request)
 function factorial(x) {
   if (x == 0 || x==1) {
     return 1
   }
   var result = x;
   do {
     result = result * (x-1)
     x = x-1
   } while (x > 1);
   return result
 }
 console.log(factorial(9));
