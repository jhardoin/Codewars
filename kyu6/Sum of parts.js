function partsSums(ls) {
    let arr = []
    while(ls.length > 0){
      arr.push(ls.reduce((a,b) => a + b, 0))
      ls.shift()
    }
    return arr.concat([0])
}

function partsSums(ls) {
    let sum = ls.reduce((a, b) => a + b, 0);
    let result = [sum];
    for (let num of ls) {
        sum -= num;
        result.push(sum);
    }
    return result;
}