// 2 variables - firstCard + secondCard with values to random number between 2 - 11

let firstCard = Math.floor(Math.random() * 12) + 2;
let secondCard = Math.floor(Math.random() * 12) + 2;
let total = firstCard + secondCard;

//  
// variable, sum and set to sum of 2 cards

if (total < 21) {
console.log(total + "congrats");
} else if (total > 21) {
console.log(total + "bad")
} ;