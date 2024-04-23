// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

//using split & join

function removeExclamationMarks(s){
    return s.split('!').join('');
}

//using replaceAll

function removeExclamationMarks(s){
    return s.replaceAll('!', '');
}