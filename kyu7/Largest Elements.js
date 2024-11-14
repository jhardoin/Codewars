const largest = (n, array) => (n == 0) ? [] : array.sort((a,b) => a - b).slice(-n)

function largest(n, array) {
    array.sort((a,b) => b - a)
    array.length = n
    return array.reverse()
  }

  function largest(n, array) {
    array.sort((a,b) => b - a)
    array.length = n
    return array.reverse()
  }

  function largest(n, array) {
    array.sort((a,b) => b - a)
    array.length = n
    return array.reverse()
  }