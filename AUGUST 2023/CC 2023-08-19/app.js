// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// the function grabs each element in the array, returns the index starting at 1 and adding 1 each iteration, then adds the colon with a space followed by the element from its respective index(where it is on the array)

var number = function(array){
    return array.map(function (line, index) {
        return (index + 1) + ': ' + line;
    });
}

// another solution using template literal

const number = array => array.map((n, i) => `${i + 1}: ${n}`);

// longer solution

var number = function(arr) {
    var newArr = [];
    if(arr.length === 0) {
        return [];
    } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
            newArr.push((i + 1) + ': ' + arr[i]);
        }
    }
    return newArr;
}