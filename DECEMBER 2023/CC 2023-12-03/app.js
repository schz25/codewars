// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error"

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// The function problem is taking in the value 'x' and checking if it's type is string first. If true it will return 'Error', if false then the second conditional and multiplies x by 50 and then adds 6. Written using ternary operator and big arrow implicit return