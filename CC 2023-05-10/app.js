



// Return a new array with the strings filtered out
const filter_list = (arr) => {
    let filter_list = [];
    for (let i = 0; i < arr.length; i++){
      if ( typeof arr[i] !== "string"){
        filter_list.push(arr[i])
    }
  } return filter_list;
};

// ES6 way

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }