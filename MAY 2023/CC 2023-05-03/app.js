// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// My Solution

function filterRange(arr, a, b){
    let arr = [5, 3, 8, 1];
    // P: takes in an array but not modify it
    // R: returns elements that are greater than or equal to a & less 
    //than or equal to b. Return a result as an array
      if(a >= b) return 1;
      if(a == b) return 0;
      if(a <= b) return -1;
    }
    arr.sort(filterRange)
    return arr;
    // E:
    // let arr = [5, 3, 8, 1];
    // let filtered = filterRange(arr, 1, 4);
    // alert( filtered ); // 3, 1 (matching values)
    // alert( arr ); // 5,3,8,1 (not modified)
  
  
  // Solution: 
  
  function filterRange(arr, a, b){
    // added brakets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)