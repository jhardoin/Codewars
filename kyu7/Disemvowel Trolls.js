function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  

  const disemvowel = str => [...str].filter(e => !'aeiouAEIOU'.includes(e)).join('')