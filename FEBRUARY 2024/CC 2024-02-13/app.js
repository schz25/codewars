// sum all the numbers of a given array except the highest and lowest element by value. The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Example:
// {6, 2, 1, 8, 10} => 16
// {1, 1, 11, 2, 3} => 6

// If the input is an empty value (null, none, nothing) or the given array is empty, or a list with only one element return 0.

// using the spread operator to pass each array element as an argument to Math.min(...array) and Math.max(...array)

function sumArray(array){
    return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array)
    - Math.max(...array) : 0;
}