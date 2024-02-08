// Given an integral number, determine if it's a square number
// Examples:
// -1 => false
// 0 => true
// 3 => false
// 4 => true
// 25 => true
// 26 => false

// Check if number times itself is equal to n

// Solution:

function isSquare(n){
    return Math.sqrt(n) % 1 === 0;
}