function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return ''
    
    let longest = '';
    for (let i = 0; i <= strarr.length - k; i++) {
      const combine = strarr.slice(i, i + k).join('');
      if (combine.length > longest.length) {
        longest = combine;
      }
    }
    return longest;
  }

  function longestConsec(strarr, k) {
    if(strarr.length == 0 || k < 1) return ''
    let longest = ''
    for(let i = 0; i <= strarr.length - k; i++){
      let temp = strarr.slice(i, i + k).join('')
      if(temp.length > longest.length) longest = temp
    }
    return longest
}