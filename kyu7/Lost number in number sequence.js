function findDeletedNumber(arr, mixArr) {
    return +arr.filter(e => !mixArr.includes(e)).join('') || 0
  }