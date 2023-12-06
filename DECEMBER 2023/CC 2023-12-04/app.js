// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// Solution

function take(arr, n){
    return arr.slice(0, n);
}

// will return n elements starting at the first element of the array

// another solution

let take = (arr, n) => arr.slice(0, n);