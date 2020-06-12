const Letter = require("./letter");

function Word(str) {
  this.arr = [...str].map((char) => new Letter(char.toLowerCase()));

  this.display = function () {
    return this.arr.map((letter) => letter.get()).join(" ");
  };

  this.attempt = function (char) {
    this.arr.forEach((letter) => letter.guess(char));
  };
}

module.exports = Word;
