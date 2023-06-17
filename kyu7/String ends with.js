function solution(str, ending){
    let splStr = str.split('')
    let endSpl = ending.split('')
    return splStr.slice(splStr.length - endSpl.length).join('') === ending
  }

  function solution(str, ending){
    return str.endsWith(ending);
  }