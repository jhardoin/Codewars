function drawStairs(n) {
    let arr = []
    for(let i = 0; i < n - 1; i++){
    arr.push('I\n')
    }
    if(n == 1) return 'I'
    return arr.map((e,i) => e + ' '.repeat(i)).join(' ') + ' I'
  }

  const drawStairs = n => [...Array(n)].map((e, i) => " ".repeat(i) + "I").join("\n");