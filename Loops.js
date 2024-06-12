// conditional statements loops//
//Excercise One _ Temperature check//

let temperature = 27; //declare temperature//

// if statements//


if (temperature < 0) {
    console.log("It's freezing");
} else if ( temperature >= 0 && temperature <= 15 ) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm");
}
// re-write statement using swich//

switch(true){ case  temperature < 0:
    console.log("It's freezing");
    break;
 case temperature >=0 && temperature <= 15: 
    console.log("It's cold.");
    break;
 case temperature >= 16 &&  temperature <=25:
    console.log("It's mild.");
    break;
   default:
    console.log("It's warm");
}

//EXcercise2: Divisibility check//
let NUmber = 20;
if(NUmber % 2 === 0 &&  NUmber % 3 === 0 ){
    console.log("Divisible by both");
} else if(NUmber % 2 === 0){
    console.log("Divisible by 2")
}else if(NUmber % 3 === 0){
    console.log("Divisible by 3")
}else{
    console.log("Not divisible by 2 or 3")
}
// re-write using switch//
switch(true){
    case NUmber % 2 === 0 && NUmber % 3 === 0:
        console.log("Divisible by both");
        break;
        case NUmber % 2 === 0:
        console.log("Divisible by 2");
        break;
        case NUmber % 3 === 0:
        console.log("Disivible by 3");
        break;
        default:
        console.log("Not divisible by 2 and 3")
}




//Excercise 3//
//loops//
for(let i = 1; i <= 10;i++){
console.log(i)
}
// print even numbers//
for(let i = 2; i<=20; i+=2){
    console.log(i)
}
// Sum of all numbers from 1 to 100//
let SumOf = 0;
for(let i=1 ; i<=100;i++){
    SumOf+=i
}
console.log("Sum of all numbers from 1 to 100",SumOf)

//GIVEN THE ARRAY OF NUMBERS PRINT EACH ELEMENT TO THE CONSOLE//
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}




// const numbers = [3, 7,2, 5, 10, 6];
let largeNumber = numbers[0 ]; // Initialize largestNumber with the first element of the array

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largeNumber) {
        largeNumber = numbers[i];
    }
}

console.log("The largest number is:", largeNumber);

//Excercise4 //
//while loops//
//QUESTION 1-3 DONE IN EXERCISE 3//
//PRINT MULTIPLES OF 5 LESS THEN 50//
for(let i = 5 ; i < 50; i += 5){
    console.log(i);
}
 

 // Execise 5//
 //QUESTION 1-3 DONE IN EXERCISE3//
//guess game//

let countdownElement = document.getElementById("countdown"); // not part of the tasks//
    let gameElement = document.getElementById("game");

    function countdown() {
        let count = 3;
        let countdownInterval = setInterval(function() {
            count--;
            countdownElement.textContent = count;
            if (count === 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = "none";
                gameElement.style.display = "block";
                
            }
        }, 1000);
    }

    countdown();

    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let messageElement = document.getElementById("message");

    function checkGuess() {
        let guessInput = document.getElementById("guess-input").value;
        let guess = parseInt(guessInput);
        
        if (guess === secretNumber) {
            messageElement.textContent = "Congratulations! You guessed the correct number!";
            messageElement.style.color = "green";
            setTimeout(function() {
                location.reload(); // Reload the page to play again
            }, 3000);
        } else {
            messageElement.textContent = "Wrong guess. Try again!";
            messageElement.style.color = "red";
        }
    }
