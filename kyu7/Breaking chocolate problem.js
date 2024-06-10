const breakChocolate = (n,m) => (n * m < 2) ? 0 : (n * m) - 1

const breakChocolate = (n,m) => n && m ? n * m - 1 : 0

function breakChocolate(n,m) {
    return n * m > 0 ? n * m - 1 : 0
  }

  function breakChocolate(n,m) {
    return n * m - 1 >= 0 ? n * m - 1 : 0
  }

  function breakChocolate(n,m) {
    return n > 0 && m > 0 ? n * m - 1 : 0
  }