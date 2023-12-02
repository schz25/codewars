// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// split the string separated by the space

// use map to map over each word and return the word as well as the words length

// map returns new array

function addLength(str){
    return str.split(' ').map( word => `${word} ${word.length}`)
}