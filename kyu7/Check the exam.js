function checkExam(array1, array2) {
    let result = 0
    for(let i = 0; i < array1.length; i++){
      if(array1[i] == array2[i]){
        result += 4
      }
      else if(array2[i] == ""){
        result += 0
      }
      else result += -1
    }
    return result > 0 ? result : 0
  }

  function checkExam(array1, array2) {
    let result = 0
    for(let i = 0; i < array1.length; i++){
      if(array1[i] == array2[i]) result += 4
      else if( array2[i] == '') result += 0
      else result -= 1
    }
    return result < 1 ? 0 : result
  }

  const checkExam = (arr1, arr2) => Math.max(arr2.reduce((score, answer, i) => answer === arr1[i] ? score + 4 : answer === '' ? score : score - 1, 0), 0)

  function checkExam(array1, array2) {
    let count = 0
    array2.map((e,i) => e == ''  ? 0 : e == array1[i] ? count += 4 : count -= 1 )
    return count > 0 ? count : 0
  }