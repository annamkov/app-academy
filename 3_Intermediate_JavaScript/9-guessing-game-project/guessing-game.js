
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

function askLimit(){
    rl.question("Enter number of attempts: ", (num) => {
        numAttempts = num;
        askRange();
    });
}

function askRange(){
    let lo;
    let hi;
    rl.question("Enter a max number: ", (max) => {
        hi = Number(max);
        rl.question("Enter a min number: ", (min) => {
            lo = Number(min);
            console.log(`I'm thinking of a number between ${lo} and ${hi}...`);
            secretNumber = randomInRange(lo, hi);
            //rl.close();
            askGuess();
        });
    });
}

function askGuess(){
    rl.question("Enter a guess: ", (guess) => {
        if(!checkGuess(Number(guess))){
            if(--numAttempts === 0){
                console.log("YOU LOSE.");
                rl.close();
            }else{
                askGuess();
            }
        }else{
            console.log("YOU WON!");
            rl.close();
        }
    });
}

function checkGuess(guess){
    if(guess === secretNumber){
        console.log("Correct!");
        return true;
    }

    if(guess < secretNumber){
        console.log("Too low.");
    }else{
        console.log("Too high.");
    }
    return false;

};

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//launches the game
askLimit();
