String.prototype.toAlternatingCase = function () {
    return[...this].map(e => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())).join('')
  }

  String.prototype.toAlternatingCase = function () {
    return this.split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }

  String.prototype.toAlternatingCase = function () {
    return [...this].map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }