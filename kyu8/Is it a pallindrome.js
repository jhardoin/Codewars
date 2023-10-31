const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')

const isPalindrome = x => x.toLowerCase() == x.split('').reverse().join('').toLowerCase()

const isPalindrome = x => x.toLowerCase() == [...x.toLowerCase()].reverse().join('')