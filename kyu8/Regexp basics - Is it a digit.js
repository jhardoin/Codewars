String.prototype.digit = function() {
    return (/^\d$/).test(this)
  };

  String.prototype.digit = function() {
    return this.length == 1 ? '0123456789'.includes(this) : false
  };