function generateShape(integer){
  return ('+'.repeat(integer) + '\n').repeat(integer).trim()
}

function generateShape(integer){
  return `${('+'.repeat(integer))}\n`.repeat(integer).trim()
}

function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

function generateShape(integer){
  let sq = []
  for(let i = 0; i < integer; i++){
    sq.push('+'.repeat(integer))
  }
  return sq.join('\n')
}

function generateShape(integer){
  let sq = []
  for(let i = 0; i < integer; i++){
    sq.push('+'.repeat(integer))
  }
  return sq.join('\n')
}