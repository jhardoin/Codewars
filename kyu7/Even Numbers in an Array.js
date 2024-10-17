const evenNumbers = (a, n) => a.filter(e => !(e % 2)).slice(-n)

function evenNumbers(array, number) {
    return array.filter(e => e % 2 == 0).slice(-number)
  }

  function evenNumbers(array, number) {
    return array.filter(e => e % 2 === 0).slice(-number)
  }

  function evenNumbers(array, number) {
    return array.filter(e => e % 2 === 0).slice(-number)
}