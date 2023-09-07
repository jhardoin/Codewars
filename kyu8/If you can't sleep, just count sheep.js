var countSheep = function (num){
    let solution = ''
    
    for(let i = 1; i <= num; i++){
      solution = solution + (i + ` sheep...`);
    }
    return solution
  }

  var countSheep = num => num == 0 ? '' : Array.from({length:num}, (v,i) => (i+1) + ' sheep...').join('')