function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0)
        let rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0)
        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
}

function findEvenIndex(arr){
    for(let i = 0; i < arr.length; i++){
      let leftSum = arr.slice(0, i).reduce((a,b) => a + b, 0)
      let rightSum = arr.slice(i + 1).reduce((a,b) => a + b, 0)
      if(leftSum == rightSum) return i
    }
    return -1
  }

  function findEvenIndex(arr){
    for(let i = 0; i < arr.length; i++){
      let left = arr.slice(0, i).reduce((a,b) => a + b, 0)
      let right = arr.slice(i + 1).reduce((a,b) => a + b, 0)
      if(left == right) return i
    } 
    return -1
}