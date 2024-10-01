function removeConsecutiveDuplicates(string) {
    return string.split(' ').filter((e,i,a) => e !== a[i + 1]).join(' ')
  }

  function removeConsecutiveDuplicates(string) {
    let arr = string.split(' ')
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i - 1]) arr2.push(arr[i])
    }
    return arr2.join(' ')
}