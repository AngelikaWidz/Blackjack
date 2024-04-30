// 2 variables - firstCard + secondCard with values to random number between 2 - 11

let firstCard = Math.floor(Math.random() * 12) + 2
let secondCard = Math.floor(Math.random() * 12) + 2
// variable, sum and set to sum of 2 cards
let total = firstCard + secondCard;
// if the user has Blackjack - used for cashing out
let hasBlackjack = false
let isAlive = true

// if .. else statement which looks at the total, and then decides which codeblock to run depending on the sum of 2 cards compared to 21
// using ternary operator

total < 21?
    console.log(total + " congrats, draw a new card?")
: total === 21?
    console.log(total + " Winner!", hasBlackjack = true) 
: console.log(total + " Bust" ), isAlive = false
