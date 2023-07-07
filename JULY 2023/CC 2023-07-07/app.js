// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
    // ...
    return Math.ceil(n /5) * 5;
  }

  // take the number in a variable
  // divide it by 5 and get the decimal value
  // take the ceil value of the decimal value by using Math.ceil()
  // multiply it by 5 to get the result
