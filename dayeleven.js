// Activty 1 
// Task 1

// const promiseOne = new Promise((resolve,reject)=>{
//  setTimeout(function () {
//   console.log('Executing after 2 seconds .');
//  },2000)
//  resolve()
// })
// promiseOne.then(()=>{
//   console.log('promise consumed! ');
// })

//  new Promise((resolve,reject)=>{
//  setTimeout(function () {
//   console.log('Async task 2');
//   resolve()
// },2000)
// }).then(()=>{
//   console.log('Async task 2 resolved');
// })

//Activty 1 Task 2
// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log('Error has come!');
//     reject(new Error('Something Went wrong! '))
//   },2000)

// }).catch(()=>{
// console.log('Error is still here !');
// })


// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({username:"Rafay",email:"abdurrafaysaqlain@hotmail.com"})
//   },2000)
// })
// promiseThree.then((user)=>{
// console.log(user);
// })
// Activity 2 
// chaining promisies
// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true
//     if (!error) {
//       resolve({ username: "Rafay", password: "123" })
//     } else {
//       reject('Somewthing went wrong ! ')
//     }
//   }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(() => {
//     console.log('The Promise is resovled or rejected.! ');
//   })


// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false
//     if (!error) {
//       resolve({ username: "Rafay", password: "123" })
//     } else {
//       reject('Js went wrong ! ')
//     }
//   }, 1000)
// })

// async function ConsumedPromiseFive(){
//   try {
//     const response = await promiseFive
//     console.log(response);   
//   } catch (error) {
//     console.log(error);
//   }
 
// }
// ConsumedPromiseFive()

// async function getAllUsers(){
//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }

// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json()
}).then((data)=>{
console.log(data);
}).catch((error)=>{
  console.log('SOmething went wrong',error);
})