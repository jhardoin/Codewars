function correct(string) {
	return string.replace(/5/g, 'S')
                 .replace(/0/g, 'O')
                 .replace(/1/g, 'I')
}

function correct(string){
    let arr = string.split('')
      let result = []
    for(let i = 0; i < arr.length; i++){
      arr[i] === '5' ? result.push('S') : arr[i] === '0' ? result.push('O') : arr[i] === '1' ? result.push('I') : result.push(arr[i])
    }
    return result.join('')
  }

  const correct = string => [...string].map(e => e == ' ' ? ' ' : e == 0 ? 'O' : e == 5 ? 'S' : e == 1 ? 'I' : e).join('')

  function correct(string){
    return [...string].map(e => e === '0' ? 'O' : e === '5' ? 'S' : e === '1' ? 'I' : e).join('')
  }

  function correct(string){
    return [...string].map(e => e === '0' ? 'O' : e === '5' ? 'S' : e === '1' ? 'I' : e).join('')
  }