function digitize(n) {
    const nString = n.toString()
    const nArr = nString.split('').reverse()
    return nArr.map(nString => parseInt(nString))
    }