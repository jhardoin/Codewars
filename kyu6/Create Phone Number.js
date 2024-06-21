function createPhoneNumber(numbers){
    let o = numbers.join('')
    return ( "(" + o[0] + o[1] + o[2] + ") " + o[3] + o[4] + o[5] + "-" + o[6] + o[7] + o[8] + o[9])
  }

  const createPhoneNumber = n => `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`

  function createPhoneNumber(numbers){
    return  `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
  }

  function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

function createPhoneNumber(numbers){
  let a = numbers.join('')
  return `(${a.substr(0, 3)}) ${a.substr(3,3)}-${a.substr(6,4)}`
}

function createPhoneNumber(numbers){
  let n = numbers
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}