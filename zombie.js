// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================
var inquirer = require("inquirer");

var userHealth = 70;
var zombieHealth = 15;
var randomNum = 0;
var randomDamage = 0;

for (var i = 0; userHealth <= 0 && zombieHealth <= 0; i++) {

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose a number between 1 & 5",
      choices: ["1", "2", "3", "4", "5"],
      name: "userNum"
    },

  ])
  .then(function(inquirerResponse) {
    // console.log(inquirerResponse);
    randomNum = Math.floor(Math.random()* 5) +1;
    randomDamage = Math.floor(Math.random()* 5) +1;
    // console.log(randomNum);

    
    if (inquirerResponse.userNum == randomNum) {
      zombieHealth = zombieHealth - randomDamage;
      console.log("You attacked the zombie with " + randomDamage);
      console.log("Zombie Health: " + zombieHealth);
    }
    else {
      userHealth = userHealth - randomDamage;
      console.log("The Zombie attacked you with " + randomDamage);
      console.log("User Health: " + userHealth);
    }

  });

}
if (userHealth <= 0) {
  console.log("you lose!")
}
else if (zombieHealth <= 0) {
  console.log("you win!")
}
