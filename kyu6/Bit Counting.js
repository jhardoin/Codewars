var countBits = function(n) {
    let m = n.toString(2)
    let count = 0
    for(let i = 0; i < m.length; i++){
      if(m[i] == 1) count++
    }
  return count
};

const countBits = n => n.toString(2).split(1).length - 1

var countBits = function(n) {
  return [...n.toString(2)].filter(e => e == '1').length
}

var countBits = function(n) {
  return [...n.toString(2)].filter(e => e == 1).length
};

let countBits = function(n) {
  return n.toString(2).split('').filter(e => e == '1').length
}

var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == '1').length
};

var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == '1').length
};

var countBits = function(n) {
  return n.toString(2).split('').filter(e => e == '1').length
};