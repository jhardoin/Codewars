function sortMyString(s) {
    let even = [...s].filter((e,i) => i % 2 == 0).join('');
    let odd = [...s].filter((e,i) => i % 2).join('');
    return even + ' ' + odd
}

function sortMyString(S) {
    let even = [...S].filter((e,i) => i % 2 == 0).join('')
    let odd = [...S].filter((e,i) => i % 2 !== 0).join('')
    return `${even} ${odd}`
}

function sortMyString(S) {
    let even = []
    let odd = []
    S.split('').forEach((e,i) => i % 2 === 0 ? even.push(e) : odd.push(e))
    return [even.join(''), odd.join('')].join(' ')
}

function sortMyString(S) {
    let even = []
    let odd = []
    S.split('').forEach((e,i) => i % 2 === 0 ? even.push(e) : odd.push(e))
    return [even.join(''), odd.join('')].join(' ')
}

function sortMyString(S) {
    let even = []
    let odd = []
    S.split('').forEach((e,i) => i % 2 === 0 ? even.push(e) : odd.push(e))
    return [even.join(''), odd.join('')].join(' ')
}

function sortMyString(S) {
    let even = []
    let odd = []
    S.split('').forEach((e,i) => i % 2 === 0 ? even.push(e) : odd.push(e))
    return [even.join(''), odd.join('')].join(' ')
}