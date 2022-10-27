const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  //a clever alternative to having multiple console logs:
  const help = {
    r: "  Type 'r' for Rock",
    p: "  Type 'p' for Paper",
    s: "  Type 's' for Scissors",
    q: "  Type 'q' to quit",
    h: "  Type 'h' for a list of valid commands\n"
  };
  
  for(let key in help){
    console.log(help[key]);
  }
  /*console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");*/
}

function getWinner(move1, move2) {
  let cmd = move1;
  let cpu = move2;

  if(cmd === cpu){ // tie
    return 0;
  }else if(VALID_MOVES[cmd].winsAgainst === cpu){ // win
    return 1;
  }else{ // loss
    return -1;
  }
}

function getCPUMove() {
  const validKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validKeys.length);
  const cpu = validKeys[randomIndex];
  return cpu;
}

function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  switch (getWinner(cmd, cpu)) {
    case 1:
      console.log("You win!\n");
      wins++;
      break;
    case 0:
      console.log("You tie.\n");
      ties++;
      break;
    case -1:
      console.log("You lose...\n");
      losses++;
      break;
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){ //undefined is falsy in javascript, an object is truthy
      let cpu = getCPUMove();
      processMove(cmd, cpu)
    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};