// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// takes in 2 nums, first is less than the second
// return nums in between the input
// subtract b from a return result include nums

function between(a, b) {
    // your code here
    // created empty array
    arr = []
    // loop through each input starting at a and check if index is less than or equal to b
    for(i = a; i <= b; i++){
        // each num that is less than or equal gets pushed into the new array
        arr.push(i)
    }
    // return new array with each less than or equal to a
    return arr
  }

  // another solution:

  const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);