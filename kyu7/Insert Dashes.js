function insertDash(num) {
    return num.toString().replace(/([13579])(?=[13579])/g, '$1-');
  }

  
  function insertDash(num) {
    num = num.toString().split('')
     
     for(let i = 0; i < num.length - 1; i++){
       if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0){
         num[i] = num[i] + '-'
       }
     }
    
     return num.join('')
     
   }