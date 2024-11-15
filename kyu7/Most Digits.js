function findLongest(array) {
  let arr = array.map((e, i) => [e.toString().length, i]);
  arr.sort((a, b) => b[0] - a[0]);
  return array[arr[0][1]];
}

function findLongest(array){
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a)
}

function findLongest(array){
  return array.reduce((a,b) => b.toString().length > a.toString().length ? b : a)
}

function findLongest(array){
  return array.reduce((a,b) => b.toString().length > a.toString().length ? b : a)
}

function findLongest(array){
  return array.reduce((a,b) => b.toString().length > a.toString().length ? b : a)
}