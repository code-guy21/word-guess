const Letter = require("./letter");

function Word(str) {
  this.arr = [...str].map((char) => (char !== " " ? new Letter(char) : " "));

  this.display = function () {
    return this.arr.join(" ");
  };

  this.attempt = function (char, attempts) {
    let correct = false;

    this.arr.forEach((letter) => {
      if (letter !== " ") {
        if (letter.guess(char)) {
          correct = true;
        }
      }
    });

    console.log(`\n${this.display()}\n`);

    if (correct) {
      console.log("Correct!\n");
    } else {
      console.log(`Wrong!\n\n${attempts} attempt(s) remaining\n`);
    }

    return correct;
  };

  this.reveal = function () {
    this.arr.forEach((letter) => {
      letter.guessed = true;
    });

    return this.arr.join("");
  };
}

module.exports = Word;
