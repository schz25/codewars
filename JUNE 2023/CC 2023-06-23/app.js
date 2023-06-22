// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//     // Go for it
//     let revStr = str.split("").reverse().join("");
//     return revStr;
//   }

  //using map
function reverseWords(str) {
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}

// anotha one

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}