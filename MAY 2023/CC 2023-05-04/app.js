// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// for instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); removed the numbers except from 1 to 4

// alert( arr ); [3, 1]

  // ...Your code...
  function filterRangeInPlace(arr, a, b){
    //P: takes in an array, removes from it all values except those that are between a and b
    //R: should not return anything
    //E:
    // let arr = [5, 3, 8, 1];
    // filterRangeInPlace(arr, 1,4); removed the numbers except from 1 to 4
    //   alert( arr ); [3, 1]

    arr.splice(a && b)

  }

// Solution:

function filterRangeInPlace(arr, a, b){
  
  for (let i = 0; i < arr.length; i++){
    let val = arr[i];
    
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]