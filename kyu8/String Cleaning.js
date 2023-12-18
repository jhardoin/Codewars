const stringClean = (s) => s.replace(/[0123456789]/g, '')

function stringClean(s){
    return s.split('').filter(e => e != parseInt(e)).join('')
  }