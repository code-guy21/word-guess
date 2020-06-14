const Letter = require("./letter");

function Word(str) {
  this.arr = [...str].map((char) => new Letter(char));
  this.solved = 0;

  this.display = function () {
    return this.arr.join(" ");
  };

  this.win = function () {
    return this.solved === this.arr.length;
  };

  this.attempt = function (char, attempts) {
    let correct = false;
    let alreadyGuessed = false;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].guessed && this.arr[i].guess(char)) {
        alreadyGuessed = true;
        break;
      } else if (this.arr[i].guess(char)) {
        correct = true;
        this.solved++;
      }
    }

    console.log(`\n${this.display()}\n`);

    if (alreadyGuessed) {
      console.log("Already guessed\n");
    } else if (correct) {
      console.log("Correct!\n");
    } else {
      console.log(`Wrong!\n\n${attempts - 1} attempt(s) remaining\n`);
    }

    return correct || alreadyGuessed;
  };

  this.reveal = function () {
    this.arr.forEach((letter) => {
      letter.guessed = true;
    });

    return this.arr.join("");
  };
}

module.exports = Word;
