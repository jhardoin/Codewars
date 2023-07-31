function solve(s){
    let upperCheck = s.split('').filter(e => e == e.toUpperCase())
    let lowerCheck = s.split('').filter(e => e == e.toLowerCase())
    
    if(upperCheck.length > lowerCheck.length) return s.toUpperCase()
    else return s.toLowerCase()
}