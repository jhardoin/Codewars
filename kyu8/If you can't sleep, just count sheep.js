var countSheep = function (num){
    let solution = ''
    
    for(let i = 1; i <= num; i++){
      solution = solution + (i + ` sheep...`);
    }
    return solution
  }