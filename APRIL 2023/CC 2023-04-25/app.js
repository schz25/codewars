function friend(friends){
  
    //Create new array called "myFriends" for add your friends
    var i,
        len = friends.length,
        myFriends = [];
    
    
    for (i = 0; i < len; i++) {
          
         //Check for names with length equal to four and it is not a number
         if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
         }
        
    }
      
    return myFriends;
  }