// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: taking in an array of numbers
//R: return sum and determine whether odd or even
// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//P: first get the sum of the array, then check if sum % 0 === 0; even OR sum % 1 === 1; odd

// function oddOrEven(array) {
//    //enter code here
//    let sum = array.reduce((acc, currentVal) => acc + currentVal, 0);
//    if(sum % 0 === 0){
//     return "even";
//    } else {
//     return "odd";
//    }
// }

//SOLUTION:

function oddOrEven(arr){
    return arr.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even'
}

// This solution uses the reduce method and takes in the accumulator(a) and the currentValue(b) and sets
// the initial value to 0 to avoid any type coercion issues. It then takes the sum of that reduce
// method and uses modulo to determine whether the sum has a remainder after being divided by 2
// if there is a remainder(true) then it will return 'odd', the first choice in the ternary operator
// if there is no remainder(false) then it will return 'even'