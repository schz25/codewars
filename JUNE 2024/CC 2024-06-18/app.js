// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

//P: taking in the number of dragons and bullets

//R: return true if he has enough bullets to defeat the dragons, false if not

//E: if there are 8 dragons he will need 16 bullets.

//P: for loop?


function hero(bullets, dragons){
    return bullets >= dragons * 2
}

// ANOTHER SOLUTION
 function hero(bullets, dragons){
    return (bullets / 2 >= dragons)
 }