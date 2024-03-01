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

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(e => +e)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }

  const highAndLow = n => `${Math.max(...n.split(' '))} ${Math.min(...n.split(' '))}`

  const highAndLow = numbers =>`${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`

  function highAndLow(numbers){
    let arr = numbers.split(' ')
    return [Math.max(...arr), Math.min(...arr)].join(' ')
  }

  function highAndLow(numbers){
    return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
  }