// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// split string, check for vowels
// if vowel is lowercase remove
// return new string and join




function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
  }

  // another solution

  function shortcut (string){
    return string
        .split('')
        .filter(str => !'aeiou'.includes(str))
        .join('')
  }