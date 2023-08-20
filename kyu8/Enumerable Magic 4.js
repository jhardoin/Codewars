function none(arr, fun){
    if(arr.length == 0) return true
    return arr.every(item => !fun(item))
  }