// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// e.g.: (Input --> Output)

// P: taking in a triangle of consecutive odd numbers

// R: return sum of nums in the nth row of triangle

// E: 
    // 1 -->  1
    // 2 --> 3 + 5 = 8

// P: figure out some kind of pattern, first rows sum is 1
// second row sum: 8, 3rd row: 27, 4th row: 64, 5th row: 125
// -> 1, 8, 27, 64, 125: ALL PERFECT CUBES


function rowSumOddNumbers(n) {
	// TODO
    return n ** 3;
}
