"use strict"

function rndNumb (min, max) {
    const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}

function isEven (numb) {
    let result = false;
    
    if( numb % 2 == 0){
        result = true;
    }
    
    return result;
}