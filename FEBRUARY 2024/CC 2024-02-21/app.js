// HOT DOOOGGSS!!!
// COME GET YA HOT DOGS HERE!

// complete the function saleHotdogs, accepts 1 parameter : n the num of hotdogs a customer will buy, different numbers have different prices. Return how much money the customer needs to spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	            100
// n >= 5 and n < 10	95
// n >= 10	            90

function saleHotdogs(n){
    var money = 0;
    if(n < 5){
        money = n * 100
    }
    else if(n >= 5 && n < 10){
        money = n * 95
    }
    else if(n >= 10){
        money = n * 90
    }
    return money
}

// another solution using ternary
function saleHotdogs(n){
    return n*(n < 5 ? 100 : n < 10 ? 95 : 90)
}