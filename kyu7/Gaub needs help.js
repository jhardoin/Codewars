function f(n){
    if(typeof n !== 'number' || n < 1 || !Number.isInteger(n)) return false
    else return  Array.from({length : n}, (x,i) => i + 1).reduce((a,b) => a + b)
    };