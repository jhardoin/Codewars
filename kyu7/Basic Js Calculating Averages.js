var Calculator = {
    average: function(...a) {
      if(a.length == 0) return 0
      return a.reduce((a,b) => a + b, 0)/a.length
    }
   }