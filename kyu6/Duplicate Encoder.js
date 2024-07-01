const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')

const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')

function duplicateEncode(word){
    let w = word.toLowerCase()
    return [...w].map(e => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')').join('')
}

function duplicateEncode(word){
    return [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')').join('')
}

function duplicateEncode(word){
    return word.toLowerCase().split('').map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')
}


function duplicateEncode(word){
    return word.toLowerCase().split('').map((e,i,a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')').join('')
}


function duplicateEncode(word){
    let a = word.toLowerCase()
    return a.split('').map(e => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')
}

function duplicateEncode(word){
    return word.toLowerCase()
               .split('')
               .map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')')
               .join('')
}


function duplicateEncode(word){
    return word.toLowerCase().split('').map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')
}


function duplicateEncode(word){
    let x = word.toLowerCase().split('')
    return x.map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')
}
