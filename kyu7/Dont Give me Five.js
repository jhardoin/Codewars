function dontGiveMeFive(start, end) {
    let result = 0
    for(let i = start; i <= end; i++){
      if(!/5/.test(i)){
        result++
      }
    }
    return result
  }

  function dontGiveMeFive(start, end){
    return Array.from({length:end - start + 1}, (e,i) => start + i).filter(e => !e.toString().includes('5')).length
  }

  function dontGiveMeFive(start, end){
    return Array.from(Array(end-start+1),(e,i)=>i+start)
            .filter((e)=>(''+e).indexOf('5')===-1)
            .length;
  }

  function dontGiveMeFive(start, end){
    return Array.from({length:end - start + 1}, (e,i) => i + start).filter(e => !e.toString().includes('5')).length
}