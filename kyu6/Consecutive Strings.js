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

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > longest.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > longest.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let tempString = strarr.slice(i, i + k).join('')
    if(longest.length < tempString.length) longest = tempString
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > longest.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(longest.length < temp.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > longest.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > longest.length) longest = temp
  }
  return longest
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let l = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let curr = strarr.slice(i, i + k).join('')
    if(curr.length > l.length) l = curr
  }
  return l
}

function longestConsec(strarr, k) {
  if(k <= 0) return ''
  let longest = ''
  for(let i = 0; i <= strarr.length - k; i++){
    let tempString = strarr.slice(i, i + k).join('')
    if(tempString.length > longest.length) longest = tempString
  }
  return longest
}

