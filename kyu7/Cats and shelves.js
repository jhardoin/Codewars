function solution(start, finish) {
    let count = 0
    for(let i = start; i < finish; finish - i >= 3 ? i += 3 : i++){
      count++
    }
    return count
  }