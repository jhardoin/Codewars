function isOpposite(s1,s2){
    if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
    for(var i = 0; i < s1.length; i++) {
      if(s1.charAt(i) === s2.charAt(i)) return false;
    }
    return true;
  }

  function isOpposite(s1,s2){
    if(s1.length !== s2.length) return false
    return [...new Set([...s1].map((e,i) => e !== s2[i]))].join(' ') === 'true'
  }