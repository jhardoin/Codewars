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

  var palindromeChainLength = function(n) {
    let count = 0
    while(n.toString() !== n.toString().split('').reverse().join('')){
      n = +n.toString().split('').reverse().join('') + n
      count++
    }
    return count
};