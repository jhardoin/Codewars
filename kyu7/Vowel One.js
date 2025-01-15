function vowelOne(s){
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' || s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u') result.push(1)
      else result.push(0)
    }
    return result.join('')
  }

  function vowelOne(s){
    return [...s].map(e => 'aeiouAEIOU'.includes(e) ? 1 : 0).join('')
  }

  function vowelOne(s){
    return s.split('').map(e => 'aeiouAEIOU'.includes(e) ? 1 : 0).join('')
}

function vowelOne(s){
  return s.split('').map(e => 'aeiouAEIOU'.includes(e) ? 1 : 0).join('')
}

function vowelOne(s){
  return s.split('').map(e => 'aeiouAEIOU'.includes(e) ? 1 : 0).join('')
}