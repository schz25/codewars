// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION 1

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

// SOLUTION 2

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// SOLUTION 3

const removeExclamationMark = s => s.replace(/!/g, '')