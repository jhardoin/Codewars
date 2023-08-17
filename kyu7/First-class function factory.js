function factory(x){
    return function threes(myArray){
      return myArray.map(e => e * x)
    }  
}