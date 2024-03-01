function getCount(str) {
    let num = 0
    let vowels = str.match(/a|e|i|o|u/g);
    if(vowels == null) {
      return num;
    }
    else {
      return vowels.length;
    }
    }


    function getCount(str) {
      let vowels = ['a', 'e', 'i', 'o', 'u']
      let count = 0
      str.split('').map(e => vowels.includes(e) ? count ++ : '')
      return count
    }

    function getCount(str, count = 0) {
      [...str].map(e => ['a', 'e', 'i', 'o', 'u'].includes(e) ? count ++ : -1)
      return count
    }

    function getCount(str) {
      let vowels = ['a', 'e', 'i', 'o', 'u']
      let count = 0
      str.split('').map(e => vowels.includes(e) ? count++ : '')
      return count
    }

    function getCount(str) {
      let vowels = ['a','e','i','o','u']
      let count = 0
      str.split('').map(e => vowels.includes(e) ? count++ : e)
      return count
    }

    function getCount(str) {
      let count = 0
      str.split('').map(e => 'aeiou'.includes(e) ? count++ : 1)
      return count
    }