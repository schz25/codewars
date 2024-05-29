// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

//returns new array
// 3 => 5.0, 10.0, 15.0 first 3 multiples of 5.0
// i = 1, i <= m, i++
// n * n push


function multiples(m, n){
    const result = [];

    for(i = 1; i <= m; i++){
        result.push(n * i);
    }

    return result;
}