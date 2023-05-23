// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//P: taking in an array of numbers, if multiple elements with the same value, remove the one with a lower index
//R: return array with smallest value removed at the first index of it. Return an empty array in empty array

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// MY SOLUTION

// function removeSmallest(numbers) {
//     //P: find smallest array, at first index of it, remove it
//     // if empty then return empty
//     // return original array
//     // let minNum = Math.min(numbers);
//     // numbers.forEach((num)=> {
//     //     if (num === minNum){
//     //         numbers.shift();
//     //     }
//     // })

//     let minNum = numbers[0];
//     //iterate through and find smallest number
//     for (let i=0; i < numbers.length; i++){
//         if (numbers[i] < minNum){ 
//             minNum = numbers[i]
//         }
//     }
//     return [];
//   }

  // SOLUTION
   
  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


