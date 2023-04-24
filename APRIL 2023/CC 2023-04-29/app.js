// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

//my solution
// function sortByAge(users){
//   const ages = new Map();
//   ages.set("John", age: 25);
//   ages.set("Pete", age: 30);
//   ages.set("Mary", age: 28);
// }

//SOLUTION
function sortByAge(arr){
    arr.sort((a,b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30};
  let mary = { name: "Mary", age: 28};
  
  let arr = [pete, john, mary];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  // alert(arr[0].name); John
  // alert(arr[1].name); Mary
  // alert(arr[2].name); Pete