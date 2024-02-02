var replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
  }

  var replaceDots = str => str.split('.').join('-')

  var replaceDots = function(str) {
    return [...str].map(e => e == '.' ? '-' : e).join('')
  }

  var replaceDots = function(str) {
    return str.split('.').join('-')
  }