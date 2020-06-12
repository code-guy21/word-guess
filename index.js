const inquirer = require("inquirer");
const pokemon = require("./pokemon");
const Word = require("./word");

let randPokemon = new Word(pokemon[Math.floor(Math.random() * 150)]);
console.log(randPokemon.arr);

function game(attempts) {
  if (attempts === 0) {
    console.log("game over");
    return;
  }

  inquirer
    .prompt([
      {
        name: "guess",
        message: "Guess a letter",
      },
    ])
    .then((resp) => {
      if (randPokemon.attempt(resp.guess)) {
        game(attempts);
      } else {
        game(attempts - 1);
      }
    });
}

game(10);
