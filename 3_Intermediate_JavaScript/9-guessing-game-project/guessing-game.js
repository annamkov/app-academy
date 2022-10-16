
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 10;

function askGuess(){
    rl.question("Enter a guess: ", (guess) => {
        if(!checkGuess(Number(guess))){
            askGuess();
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

askGuess();