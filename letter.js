function Letter(char) {
  this.value = char;
  this.guessed = false;

  this.get = function () {
    return this.guessed ? this.value : "_";
  };

  this.guess = function (char) {
    this.guessed = char === this.value;
  };
}

module.exports = Letter;
