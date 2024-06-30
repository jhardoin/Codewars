function findUniq(arr) {
    arr.sort((a,b) => a - b);
    return (arr[0] !== arr[1]) ? arr[0] : arr[arr.length - 1]
  }
  

  function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1]
  }

  function findUniq(arr) {
    return +arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e)).join('')
  }
  

  function findUniq(arr) {
    return arr.find((e,i,a) => a.indexOf(e) == a.lastIndexOf(e))
  }
  

  function findUniq(arr) {
    return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e))
}


function findUniq(arr) {
  return arr.find((e,i,a) => a.indexOf(e) == a.lastIndexOf(e))
}

function findUniq(arr) {
  return arr.find((e,i,a) => a.indexOf(e) == a.lastIndexOf(e))
}
