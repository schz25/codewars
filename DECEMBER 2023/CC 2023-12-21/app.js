// Take in an array of numbers and return it with each number squared

// example:

// 9119 => 811181
// 9 squared is 81 and 1 squared is 1 (81-1-1-81)
// 765 => 493625
// 7 squared is 49 6 squared is 36 5 squared is 25 (49-36-25)

function squareDigits(num){
    return Number(('' + num).split('').map(function(val) {return val * val}).join(''))
}