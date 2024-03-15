function solve(s){
    let upperCheck = s.split('').filter(e => e == e.toUpperCase())
    let lowerCheck = s.split('').filter(e => e == e.toLowerCase())
    
    if(upperCheck.length > lowerCheck.length) return s.toUpperCase()
    else return s.toLowerCase()
}

function solve(s){
    let upper = 0
    let lower = 0
    s.split('').map(e => e == e.toUpperCase() ? upper++ : lower++)
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}

function solve(s){
    let upper = [...s].filter(e => e == e.toUpperCase()).length
    let lower = [...s].filter(e => e == e.toLowerCase()).length
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
  }