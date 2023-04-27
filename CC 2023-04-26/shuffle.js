// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// Fisher-Yates shuffle, walks through the array in the reverse order and swap each element with a random one before it:
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i +1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  // Simpler solution: 
  function shuffle(array){
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  // alert(arr);
  
  // Somewhat works, because Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly/
  
  // But because the sorting function is not meant to be used this way, not all permutations have the same probability