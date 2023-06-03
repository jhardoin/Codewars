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
