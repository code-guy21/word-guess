const inquirer = require("inquirer");
const data = require("./pokemon");
const chalk = require("chalk");

const Word = require("./word");

let pokemon = new Word(data[Math.floor(Math.random() * 149)]);
console.log(pokemon.reveal());
let score = 0;

function start(attempts) {
  if (attempts === 0) {
    return console.log(
      chalk.redBright("Game Over!") +
        `\n\nIt was ${chalk.yellow(
          pokemon.reveal()
        )}\n\nFinal Score: ${chalk.greenBright(score)}\n`
    );
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
        score++;

        console.log(chalk.yellow("You Win!"));
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

console.log(chalk.yellow("\nGuess that Pokemon!\n"));
console.log(`${pokemon.display()}\n\n`);

start(10);
