const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')

const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')

function duplicateEncode(word){
    let w = word.toLowerCase()
    return [...w].map(e => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')').join('')
}