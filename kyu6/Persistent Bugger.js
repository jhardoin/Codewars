function persistence(num) {
  let result = 0,
      str = num.toString()
  while(str.length > 1){
    str = ([...str].reduce((a,c) => a * c)).toString()
    result++
  }
 return result
}

function persistence(num) {
  let count = 0
   while (num.toString().length > 1){
     num = [...num.toString()].reduce((a,b) => +a * +b)
     count++
   }
  return count
}

function persistence(num) {
  let count = 0
  while(num.toString().length > 1){
    num = [...num.toString()].reduce((a,b) => a * b, 1)
    count++
  }
 return count
}