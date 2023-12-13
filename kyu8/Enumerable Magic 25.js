const take = (arr, n) => arr.slice(0, n)

const take = (arr, n) => arr.filter((e,i) => i < n)

function take(arr, n) {
    return arr.slice(0,n)
  }