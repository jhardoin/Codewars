function disariumNumber(n){
    return n == [...n.toString()].map((e,i) => Math.pow(+e, i+1)).reduce((a,b) => a + b, 0) ? 'Disarium !!' : 'Not !!'
  } 