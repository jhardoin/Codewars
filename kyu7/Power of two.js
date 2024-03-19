function isPowerOfTwo(n){
    if(n <= 0) return false;
      while ( n % 2 === 0){
      n /= 2;
    }
    return (n === 1);
  
    
  }

  function isPowerOfTwo(n){
    for(let i = 0; i <= 100; i++){
        if(n == (2 ** i)){
            return true;
        }
    }
    return false;
}