const sumStrings = (a,b) =>`${+a + +b}`.length <= 15 ? `${+a + +b}` : String(BigInt(a) + BigInt(b))

function sumStrings(a,b) { 
    return (BigInt(a) + BigInt(b)).toString()
  }