const stringClean = (s) => s.replace(/[0123456789]/g, '')

function stringClean(s){
    return s.split('').filter(e => e != parseInt(e)).join('')
  }

  function stringClean(s){
    return [...s].filter(e => !'1234567890'.includes(e)).join('')
  }