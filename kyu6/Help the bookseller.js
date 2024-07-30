function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) return ''
    let obj = {}
    listOfCat.forEach(e => obj[e] = 0)

    listOfArt.forEach(book => {
        let [code, quantity] = book.split(' ')
        let category = code[0]
        quantity = +quantity

        if (obj.hasOwnProperty(category)) obj[category] = obj[category] + quantity
    })
    let result = listOfCat.map(category => `(${category} : ${obj[category]})`).join(' - ')

    return result
}