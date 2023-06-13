String.prototype.toAlternatingCase = function () {
    return[...this].map(e => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())).join('')
  }