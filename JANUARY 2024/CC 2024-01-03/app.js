// Multiply a given number by eight if it is an even number and by nine otherwise

// MY SOLUTION

function simpleMultiply(number){
    if(number % 2 == 0){
        return number * 8
    } else {
        return number * 9
    }
}

// ANOTHER SOLUTION

function simpleMultiplication(n){
    return n * (n % 2 ? 9 : 8)
}