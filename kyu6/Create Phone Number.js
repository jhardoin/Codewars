function createPhoneNumber(numbers){
    let o = numbers.join('')
    return ( "(" + o[0] + o[1] + o[2] + ") " + o[3] + o[4] + o[5] + "-" + o[6] + o[7] + o[8] + o[9])
  }