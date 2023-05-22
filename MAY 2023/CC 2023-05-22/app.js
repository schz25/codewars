// In this kata you will create a function that takes a list of non-negative integers and strings and returns
// a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P: We will be given a list of non-negative integers (NO NEGATIVE NUMS)
// also letters! Will we be given any special characters? Will we
// be given an empty arr? (it's gonna be an arr)
// and if we are, what do we get back? I'm gunna say []
//R: Should return an arr of numbers (or nothing in the case of ...nothing)
// or if you were just given letters in the first place

function filter_list(l){
   return l.filter((elem)=>{
        typeof elem == 'number'
    })
    //if l is empty return empty
    //we are going to make a filter
    //filter if it is a num
    //return!
}