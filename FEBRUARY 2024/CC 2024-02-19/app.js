// The exclusive or evaluates two booleans
// Returns true if exactly one of the expressions are true, false otherwise
// EXAMPLE:
// false xor false == false 
// true xor true == true
// false xor true == true
// true xor true == false

// xor only returns true if exactly one of two expressions evaluates to true

// Define a function xor (a,b) where a and b are two expressions to be evaluated

// Check if one is true, return true
// if both are false, or both are true return false

// SOLUTION 1:

function xor(a,b){
    return a != b;
}

// SOLUTION 2:

function xor(a,b){
    return (a || b) && !(a && b);
}