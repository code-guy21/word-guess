function Letter(char) {
  this.value = char;
  this.guessed = false;

  this.guess = function (char) {
    if (char.toLowerCase() === this.value.toLowerCase()) {
      this.guessed = true;
      return true;
    }

    return false;
  };
}

Letter.prototype.toString = function () {
  return this.guessed ? this.value : "_";
};

module.exports = Letter;
