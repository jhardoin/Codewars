function minSum(arr) {
    return arr.sort((a,b) => a - b).reduce((prev,curr) => prev + curr * arr.pop() ,0)
  }

  function minSum(arr) {
    arr = arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    while (i < j ) {
      sum += arr[i] * arr[j];
      i++;
      j--;
    }
    return sum;
  }

  function minSum(arr) {
    arr.sort((a,b) => a - b)
    let sum = 0
    for(let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--){
      sum += arr[i] * arr[j]
    }
    return sum
}

function minSum(arr) {
  arr.sort((a,b) => a - b)
  let sum = 0
  for(let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--){
    sum += arr[i] * arr[j]
  }
  return sum
}

function minSum(arr) {
  arr.sort((a,b) => a - b)
  let sum = 0
  for(let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--){
    sum += arr[i] * arr[j]
  }
  return sum
}

function minSum(arr) {
  arr.sort((a,b) => a - b)
  let sum = 0
  for(let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--){
    sum += arr[i] * arr[j]
  }
  return sum
}