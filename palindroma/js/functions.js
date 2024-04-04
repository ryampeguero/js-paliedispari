"use strict"


/**
 * Description Controlla che il parametro sia una parola palindroma
 * @param {String}}
 * @returtn {boolean}
 */
function isPalindrome(parola){
    let result = false;
    const array = [];
    let j = 0;

    for (let i = parola.length; i > 0; i--) {
        console.log("J: ",j);
        array[j] = parola[i-1];   
        j++;    
    }
    console.log(array);

    for (let i = 0 ; i < parola.length; i++) {
        console.log("A: ", array[i], "ind:", i, "P: ", parola[i]);

        if(array[i] !== parola[i]){
            result = false;
            console.warn("Ci sono");
            continue;

        }else{
            result = true;
        }
    }

    return result;
}