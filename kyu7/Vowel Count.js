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