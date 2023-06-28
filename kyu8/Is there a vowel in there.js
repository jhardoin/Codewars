function isVow(a){
    return a.map(e => {
      let char = String.fromCharCode(e);
      if(['a', 'e', 'i', 'o', 'u',].includes(char)) {
        return char;
      }
      else return e;
    })
}