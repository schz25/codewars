//word -> palidrome
//str -> letters, all lower, spec, funny biz
//return true or false

// function isPalidrome(word){
//     //split, reverse, join
//     //rev === word
//     let reversedWord = word.split('').reverse().join('')
//     return reversedWord === word
// }

const isPalidrome = word => word === word.split('').reverse().join('')

console.log(isPalidrome('racecar'), 'true')
console.log(isPalidrome('leonnoel'), 'true')
console.log(isPalidrome('spongebob'), 'false')