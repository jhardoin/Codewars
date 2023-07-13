function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort()
    let numLetters = []
    let count = 1
    
    for(let i = 0; i < arr.length; i++)
      if(arr[i] == arr[i + 1]) {
        count++;
      }
      else {
        numLetters = [...numLetters, count]
        count = 1
      }
    
   return numLetters.filter(e => e > 1).length
  }