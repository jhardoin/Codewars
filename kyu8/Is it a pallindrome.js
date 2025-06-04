const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')

const isPalindrome = x => x.toLowerCase() == x.split('').reverse().join('').toLowerCase()

const isPalindrome = x => x.toLowerCase() == [...x.toLowerCase()].reverse().join('')

function isPalindrome(x) {
    return x.toLowerCase() == [...x.toLowerCase()].reverse().join('')
  }

  function isPalindrome(x) {
    return x.toLowerCase() == [...x.toLowerCase()].reverse().join('')
  }

  function isPalindrome(x) {
    let y = x.toLowerCase()
    return y == [...y].reverse().join('')
}

function isPalindrome(x) {
  let y = x.toLowerCase()
  return y == [...y].reverse().join('')
}

function isPalindrome(x) {
  let y = x.toLowerCase()
  return y == [...y].reverse().join('')
}