function digitize(n) {
    const nString = n.toString()
    const nArr = nString.split('').reverse()
    return nArr.map(nString => parseInt(nString))
    }

    const digitize = n => n.toString().split('').reverse().map(e => +e)

    const digitize = n => [...n.toString()].reverse().map(e => +e)