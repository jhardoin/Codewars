function sentence(arrayOfObjects) {
    let x = arrayOfObjects.sort((a,b) => +Object.keys(a)[0] - +Object.keys(b)[0])
    return x.map(e => e[Object.keys(e)[0]]).join(' ')
}