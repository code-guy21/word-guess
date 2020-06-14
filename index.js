const inquirer = require("inquirer");
const data = require("./pokemon");

const Word = require("./word");

let pokemon = new Word(data[Math.floor(Math.random() * 149)]);

function start(attempts) {
  if (attempts === 0) {
    return console.log(`Game Over!\n\nIt was ${pokemon.reveal()}\n`);
  }

  inquirer
    .prompt([
      {
        name: "guess",
        message: "Enter a letter",
      },
    ])
    .then((resp) => {
      if (pokemon.attempt(resp.guess, attempts)) {
        start(attempts);
      } else {
        start(attempts - 1);
      }
    });
}

console.log("\nGuess that Pokemon!\n");
console.log(`${pokemon.display()}\n\n`);

start(10);
