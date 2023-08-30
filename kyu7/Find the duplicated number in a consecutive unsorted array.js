function findDup( arr ){
  let sorted = arr.sort((a,b) => a - b)
  for(let i = 0; i < arr.length; i++){
    if(sorted[i] == sorted[i+1]){
      return sorted[i]
    }
  }
}