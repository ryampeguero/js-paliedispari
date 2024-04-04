"use strict"
const numbUser = parseInt(prompt("Scegli un numero da 1 a 5"));
const choiceUser = prompt("Pari o Dispari").toLowerCase();
const numbPc = rndNumb(1,5);

const sum = numbUser + numbPc;
let message;

console.log("Somma: ", sum);
console.log("choiceUser: ", choiceUser);
console.log("Pari?", isEven(sum));
console.log("confronto", choiceUser === "pari");
if((isEven(sum) && choiceUser === "pari") || (!isEven(sum) && choiceUser === "dispari")){
    message = "Hai vinto";
}else {
    message = "Hai perso";
}

console.warn(message);