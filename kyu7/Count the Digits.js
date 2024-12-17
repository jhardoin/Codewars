function nbDig(n, d) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(i * i);
    }
    let filteredArray = result.filter((num) => String(num).includes(d.toString()));
  
    let digitCount = filteredArray.reduce((count, num) => {
      return count + String(num).split(d.toString()).length - 1;
    }, 0);
  
    return digitCount;
  }
  

  function nbDig(n, d) {
    return Array.from({length:n + 1}, (e,i) => i*i).join('').split(d).length - 1
  }

  function nbDig(n, d) {
    return Array.from({length: n + 1}, (_,i) => i ** 2).join('').split('').filter(e => e == d).length
}

function nbDig(n, d) {
  let arr = Array.from({length:n + 1}, (_,i) => i ** 2)
  let count = 0
  for(let i = 0; i < arr.length; i++){
    count += arr[i].toString().split('').filter(e => e == d).length
  }
  return count
}

function nbDig(n, d) {
  return Array.from({length: n + 1}, (_,i) => i ** 2).join('').split('').filter(e => e == d).length
}

function nbDig(n, d) {
  return Array.from({length: n + 1}, (_,i) => i ** 2).join('').split('').filter(e => e == d).length
}

function nbDig(n, d) {
  return Array.from({length: n + 1}, (_,i) => i ** 2).join('').split('').filter(e => e == d).length
}

function nbDig(n, d) {
  return Array.from({length: n + 1}, (_,i) => i ** 2).join('').split('').filter(e => e == d).length
}