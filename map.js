// // const coding = ["java","python","js","html","css"]
// // const values = coding.forEach((item) => { 
// //  return item
// // })
// // console.log(values);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = numbers.filter((num)=>{
// // return num > 4
// // })
// // console.log(newNums);
// const secondNums= []
// numbers.forEach((num) => {
//   if (num > 5) {
//     secondNums.push(num)
//   }
// })
// console.log(secondNums);

const books =[
  {title:'Book One',date:1990,genre:'history'},
  {title:'Book Two',date:2010,genre:'science-fiction'},
  {title:'Book One',date:2010,genre:'romance'},
  {title:'Book One',date:1989,genre:'horror'},
  {title:'Book One',date:2023,genre:'crime'},
]
const newBooks = books.filter((item)=> item.date > 2000 && item.title==='Book One')
console.log(newBooks);