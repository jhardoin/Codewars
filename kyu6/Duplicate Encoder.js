const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')

const duplicateEncode = word => [...word.toLowerCase()].map((e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')').join('')