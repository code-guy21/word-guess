const inquirer = require("inquirer");
const data = require("./pokemon");

const Word = require("./word");

let pokemon = new Word(data[Math.floor(Math.random() * 149)]);
console.log(pokemon.arr);

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
      let guess = pokemon.attempt(resp.guess, attempts);

      if (pokemon.win()) {
        console.log("You Win!");
        console.log("\nGuess another Pokemon!\n");
        pokemon = new Word(data[Math.floor(Math.random() * 149)]);
        console.log(`${pokemon.display()}\n\n`);
        start(10);
      } else if (!guess) {
        start(attempts - 1);
      } else {
        start(attempts);
      }
    });
}

console.log("\nGuess that Pokemon!\n");
console.log(`${pokemon.display()}\n\n`);

start(10);
