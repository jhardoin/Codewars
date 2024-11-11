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

function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
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

function partsSums(ls) {
    let sum = ls.reduce((a, b) => a + b, 0);
    let result = [sum];
    for (let num of ls) {
        sum -= num;
        result.push(sum);
    }
    return result;
}