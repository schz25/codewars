// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(s){
    return s[s.length - 1] === '!' ? s.slice(0, s.length -1) : s
}

// another solution
const remove = s => s.replace(/!$/, '');

// another solution
function remove(s){
    return s.endswith('!') ? s.slice(0, -1) : s;
}