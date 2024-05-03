function searchNames( logins ){
    return logins.filter(e => e[0].endsWith('_'))
  }