let xor = (a, b) => ((a === true && b === false) || (a === false && b === true)) ? true : false

const xor = (a, b) => (!a && b) || (a && !b)

function xor(a, b) {
    return a ^ b ? true : false
}