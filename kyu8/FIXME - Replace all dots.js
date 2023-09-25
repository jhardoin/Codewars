var replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
  }

  var replaceDots = str => str.split('.').join('-')