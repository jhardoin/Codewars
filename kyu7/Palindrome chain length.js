function isPalindrome(num) {
    const strNum = num.toString();
    return strNum === strNum.split('').reverse().join('');
  }
  
  var palindromeChainLength = function(n) {
    let steps = 0
    while(!isPalindrome(n)){
      const nRev = +n.toString().split('').reverse().join('');
      n += nRev;
      steps++;
    }
    return steps
  };