function Letter(char) {
  this.char = char;
  this.guessed = false;

  this.value = function () {
    return this.guessed ? this.char : "_";
  };

  this.guess = function (val) {
    this.guessed = val === this.char;
  };
}

module.exports = Letter;
