function calculateYears(principal, interest, tax, desired) {
    let y = 0
    while(principal < desired){
      principal += (principal * interest) * (1 - tax)
      y++
    }
  return y
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  for(let i = principal; i < desired; i += (i * interest) - (i * interest * tax)){
    years++
  }
  return years
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while(principal < desired){
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while(principal < desired){
    principal += (principal * interest) * (1 - tax)
    years++
  }
  return years
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while(principal < desired){
    let addInt = principal * interest
    let afterTaxes = addInt * (1 - tax)
    principal += afterTaxes
    years++
  }
  return years
}

function calculateYears(principal, interest, tax, desired) {
  let count = 0
  while(principal < desired){
    let x = principal * interest
    principal = principal + (x - (x * tax))
    count++
  }
  return count
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while(principal < desired){
    let increase = principal * interest
    let decrease = increase * tax
    principal += increase - decrease
    years++
  }
  return years
}