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

  function duplicateCount(text){
    let obj = [...text.toLowerCase()].reduce((a,b) => { a[b] = (a[b] || 0) + 1, a 
                                                    return a }, 
                                                    {})
    return Object.values(obj).filter(e => e > 1).length
  }

  function duplicateCount(text){
    let a = [...new Set([...text.toLowerCase()])]
    return a.map(e => [e, [...text.toLowerCase()].filter(el => e == el).length]).filter(e => e[1] > 1).length
  }

  function duplicateCount(text){
    return [...new Set([...text.toLowerCase()].filter((e,i,a) => a.indexOf(e) !== a.lastIndexOf(e)))].length
}