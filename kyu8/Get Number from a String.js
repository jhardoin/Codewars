function getNumberFromString(s) {
    return +[...s].filter(e => e >= '0' && e <= '9').join('')
   }