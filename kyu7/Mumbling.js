function accum(s) {;
    let newArr = [s[0] + ','];
    for(let i = 1; i < (s.length) ; i++){
      newArr = newArr + (s[i].repeat(i + 1).toLowerCase() + ',')
      
    }
    let arrMult = newArr.split(',').filter(e => e.length > 0);
    return arrMult.map(e => e[0].toUpperCase() + e.slice(1)).join('-')
}

function accum(s) {
	return [...s].map((e,i) => e.repeat(i + 1)).map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('-')
}

function accum(s) {
	return [...s].map((e,i) => e.repeat(i+1)).map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('-')
}

function accum(s) {
	return [...s].map((e,i) => e[0].toUpperCase() + e.repeat(i).toLowerCase()).join('-')
}

function accum(s) {
	return s.split('').map((e,i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-')
}


function accum(s) {
  return s.split('').map((e,i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-')
}