function pattern(n){
    let x = Array.from({length:n}, (_,i) => i + 1).reverse()
    let arr = []
    x.map((e,i,a) => arr.push(a.slice(0, a.length - i).join('')))
    return arr.join('\n')
    
}