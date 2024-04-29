function capitalize(s,arr){
    return [...s].map((e,i) => arr.includes(i) ? e.toUpperCase() : e).join('')
  }