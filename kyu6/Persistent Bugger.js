function persistence(num) {
  let result = 0,
      str = num.toString()
  while(str.length > 1){
    str = ([...str].reduce((a,c) => a * c)).toString()
    result++
  }
 return result
}