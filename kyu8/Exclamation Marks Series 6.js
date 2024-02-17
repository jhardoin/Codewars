function remove(s,n){
    let input = s;
    while (n) {
    input = input.replace(/!/, "");
    n-=1;
    }
    return input;
  }

  function remove(s,n){
    return s.split('').filter(e => e != '!' || n-- <= 0).join('');
  }