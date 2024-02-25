function grader(score) {
    if(score > 1 || score < .6) return 'F'
    if(score >= .9) return 'A'
    if(score >= .8) return 'B'
    if(score >= .7) return 'C'
    else return 'D'
  }

  function grader(score) {
    return score > 1 || score < .6 ? 'F' :
           score >= .9 ? 'A' :
           score >= .8 ? 'B' :
           score >= .7 ? 'C' : 'D'
  }