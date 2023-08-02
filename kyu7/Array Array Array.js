function explode(x){
    function count() {
    if(typeof x[0] == 'number' && typeof x[1] == 'number') return x[0] + x[1]
    else if (typeof x[0] == 'number' && typeof x[1] !== 'number') return x[0]
    else if (typeof x[0] !== 'number' && typeof x[1] == 'number') return x[1]
    else return 'Void!'
    } 
    return count == 0 ? [] : count() == 'Void!' ? 'Void!' :Array.from({ length : count()}, (v, i) => x) 
  }