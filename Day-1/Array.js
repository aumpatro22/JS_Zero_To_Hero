// let student=["he",45.52];
// console.log(student);
// // in js indexing start from 0 
// //updating the js value in array 
// console.log(student[2]=43);
// console.log(student);//-> it will take vlaue in dynamically 
let basket =["zero","one","two"];
basket.push("three");
basket.pop()
console.log(basket)
// using the loop to to access the element 
let fruits = ["Apple", "Banana", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
fruits.forEach(function(it){
    console.log(it);
})