const filterString = v => Number(v.replace(/[a-zA-Z]/gi, ''))

var filterString = function(value) {
    return +[...value].filter(e => '1234567890'.includes(e)).join('')
  }

  var filterString = function(value) {
    return +value.split('').filter(e => '1234567890'.includes(e)).join('')
}