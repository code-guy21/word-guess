const Letter = require("./letter");

function Word(str) {
  this.arr = [...str].map((char) => (char !== " " ? new Letter(char) : " "));

  this.display = function () {
    return this.arr.join(" ");
  };

  this.attempt = function (char) {
    let correct = false;
    this.arr.forEach((letter) => {
      if (letter !== " ") {
        if (letter.guess(char)) {
          correct = true;
        }
      }
    });

    console.log(`\n${this.display()}\n`);

    return correct;
  };
}

module.exports = Word;
