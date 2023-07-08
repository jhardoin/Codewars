function sortArray(array) {
    let oddSorted = array.filter(e => e % 2).sort((a,b) => a - b)
    return array.map(e => e % 2 ? oddSorted.shift() : e)
}