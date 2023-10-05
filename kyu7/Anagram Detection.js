const isAnagram = (test, original) => test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')

var isAnagram = (test, original) => test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')