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