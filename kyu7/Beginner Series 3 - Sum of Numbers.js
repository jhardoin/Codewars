function getSum(a, b){
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return (max - min + 1) * (max + min) / 2
  }

  function getSum(a, b){
    let result = []
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
      result.push(i)
    }
      return result.reduce((a,b) => a + b, 0)
  }

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

  function getSum(a, b){
    return a == b ? a : Array.from({length:Math.max(a,b) - Math.min(a,b) + 1}, (e,i) => i + Math.min(a,b)).
    reduce((a,b) => a + b, 0)
 }

 function getSum(a, b){
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Array.from({length: Math.abs(max - min + 1)}, (_, i) => min + i).reduce((a,b) => a + b, 0)
}  

function getSum(a, b){
  if(a == b) return a
  let arr = []
  for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
    arr.push(i)
  }
  return arr.reduce((a,b) => a + b, 0)
}