const Letter = require("./letter");
const chalk = require("chalk");

function Word(str) {
  this.val = str;
  this.arr = [...str].map((char) => new Letter(char));
  this.attempted = [];

  this.display = function () {
    return this.arr.join(" ");
  };

  this.win = function () {
    return this.val === this.arr.join("");
  };

  this.attempt = function (char, attempts) {
    if (this.attempted.includes(char)) {
      console.log(`\n${this.display()}\n`);
      console.log("Already guessed!\n");
      return true;
    }

    let correct = false;

    this.arr.forEach((letter) => {
      if (letter.guess(char)) {
        correct = true;
      }
    });

    console.log(`\n${this.display()}\n`);

    if (!this.win()) {
      if (correct) {
        console.log(chalk.greenBright("Correct!\n"));
      } else if (attempts - 1 > 0) {
        console.log(
          chalk.redBright("Wrong!") +
            `\n\n${attempts - 1} attempt(s) remaining\n`
        );
      }
    }

    this.attempted.push(char);

    return correct;
  };

  this.reveal = function () {
    return this.val;
  };
}

module.exports = Word;
