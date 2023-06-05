function highAndLow(numbers){
    let newArry = numbers.split(' ').sort((a,b) => a - b);
    let low = newArry.splice(0,1)
    let high = newArry[newArry.length - 1]
    
    if(high === undefined) {
      return (`${low} ${low}`)
    }
    else{
    return (`${high } ${low}`)
    }
  }