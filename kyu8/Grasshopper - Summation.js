var summation = function (num) {
    return (num * (num + 1))/2
  }


var summation = (num) => Array.from({length : num}, (v,i) => i + 1).reduce((a,b) => a+b)

const summation = num => Array.from({length:num}, (e,i) => i + 1).reduce((a,b) => a + b, 0)