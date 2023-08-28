Number.prototype.times = function (f) {
    for (let i = 0; i < this.valueOf(); i++) {
      f(i);
    }
  }