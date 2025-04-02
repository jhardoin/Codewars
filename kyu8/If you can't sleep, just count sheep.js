var countSheep = function (num){
    let solution = ''
    
    for(let i = 1; i <= num; i++){
      solution = solution + (i + ` sheep...`);
    }
    return solution
  }

  var countSheep = num => num == 0 ? '' : Array.from({length:num}, (v,i) => (i+1) + ' sheep...').join('')

  var countSheep = num => [...Array(num)].map((e,i) => (i+1) + ' sheep...').join('')

  var countSheep = function (num){
    if(num == 0) return ''
    let a = []
    for(let i = 0; i < num; i++){
      a.push(`${i+1} sheep...`)
    }
    return a.join('')
  }

  var countSheep = num => [...Array(num)].map((e,i) => (i+1) + ' sheep...').join('')