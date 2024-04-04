"use strict"
const numbUser = parseInt(prompt("Scegli un numero da 1 a 5"));
const choiceUser = prompt("Pari o Dispari").toLowerCase();
const numbPc = rndNumb(1,5);

const sum = numbUser + numbPc;
let message;


if((isEven(sum) && choiceUser === "pari") || (!isEven(sum) && choiceUser === "dispari")){
    message = "Hai vinto";
}else {
    message = "Hai perso";
}

console.warn(message);