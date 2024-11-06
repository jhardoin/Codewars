function wave(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') { 
        result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
      }
    }
    return result;
  }
  

  function wave(str){
    let arr = Array.from({ length: str.length }, () => str)
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].split('').map((e, index) => e === ' ' ? ' ' : index === i ? e.toUpperCase() : e).join('');
    }
    return arr.filter((e, i) => e !== str && e !== ' ')
  }

  function wave(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') { 
        result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
      }
    }
    return result
  }

  function wave(str){
    let arr = []
    for(let i = 0; i < str.length; i++){
      if(str[i] !== ' ') arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }
    return arr
}

function wave(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return arr
}

function wave(str){
  let arr = []
  str.split('').forEach((_, i) => _ == ' ' ? ' ' : arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1)))
  return arr
}

function wave(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return arr
}

function wave(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ')arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return arr
}

function wave(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }
  }
  return arr
}

function wave(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }
  }
  return arr
}