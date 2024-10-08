const stray = numbers => numbers.reduce((a,b) => a ^ b)

const stray = numbers => numbers.reduce((a,b) => a ^ b)

function stray(numbers) {
    return +numbers.filter(e => numbers.indexOf(e) == numbers.lastIndexOf(e)).join()
  }

  function stray(numbers) {
    return numbers.find((e,i) => numbers.indexOf(e) == numbers.lastIndexOf(e))
  }

  function stray(numbers) {
    return +numbers.filter((e,i,a) => a.indexOf(e) == a.lastIndexOf(e)).join('')
  }

  function stray(numbers) {
    return numbers.find((e,i,a) => a.indexOf(e) === a.lastIndexOf(e))
}

function stray(numbers) {
  return numbers.find((e,i,a) => a.indexOf(e) === a.lastIndexOf(e))
}

function stray(numbers) {
  return numbers.find((e,i,a) => a.indexOf(e) === a.lastIndexOf(e))
}

function stray(numbers) {
  return numbers.find(e => numbers.indexOf(e) === numbers.lastIndexOf(e))
}