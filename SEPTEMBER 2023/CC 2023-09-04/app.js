// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


// taking in a string, split each character, find the duplicates and then join them back together

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



const doubleChar = (str) => str.split('').map(c => c + c).join('');