// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//P: You will be given a string (maybe a string everytime) It will only
//include letters from A-Z
// (also a-z little) I assume we won't be given an empty, it would
//just return empty string
//R: You will be returning the same letters that you were given, but with each
//first letter capitalized, each set of letters separated by a -, and +1 amount
//of letters comparatively to their index
//P:

function accum(s){
    let arr = []
    // I want separate each letter from one another into an arr
    for(i=0; i < s.length; i++){
        // console.log(s[i].toUpperCase() + s[i].repeat(1))
        // const newArr = s[i].repeat()
        let modifiedStr = s[i].toUpperCase() + s[i].repeat(i)
        arr.push(modifiedStr)
    }
    return arr.join('-')
}