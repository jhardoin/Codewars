var summation = function (num) {
    return (num * (num + 1))/2
  }


var summation = (num) => Array.from({length : num}, (v,i) => i + 1).reduce((a,b) => a+b)

const summation = num => Array.from({length:num}, (e,i) => i + 1).reduce((a,b) => a + b, 0)

var summation = num => Array.from({length: num}, (e, i) => i + 1).reduce((a,b) => a + b, 0)

var summation = function (num) {
  return Array.from({length:num},(e,i) => i + 1).reduce((a,b) => a+b,0)
}

var summation = function (num) {
  return Array.from({length:num}, (_, i) => i + 1).reduce((a,b) => a + b, 0)
}