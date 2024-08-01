function expandedForm(num) {
    return num
        .toString()
        .split('')
        .map((e, i, a) => e + '0'.repeat(a.length - i - 1))
        .filter(e => +e !== 0)
        .join(' + ')
}

function expandedForm(num) {
    return num
        .toString()
        .split('')
        .map((e, i, a) => e + '0'.repeat(a.length - i - 1))
        .filter(e => +e !== 0)
        .join(' + ')
}

function expandedForm(num) {
    return num.toString().split('').map((e,i,a) => e + '0'.repeat(a.length - i - 1)).filter(e => +e !== 0).join(' + ')
}

function expandedForm(num) {
    return num.toString().split('').map((e,i,a) => e + '0'.repeat(a.length - i - 1)).filter(e => +e !== 0).join(' + ')
}

function expandedForm(num) {
    return num.toString().split('').map((e,i,a) => e + '0'.repeat(a.length - 1 - i)).filter(e => +e !== 0).join(' + ')
}

function expandedForm(num) {
    return num.toString().split('').map((e,i,a) => e + '0'.repeat(a.length-1-i)).filter(e => +e !== 0).join(' + ')
}