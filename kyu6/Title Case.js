function titleCase(title, minorWords) {
    let minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : []
    let titleArray = title.toLowerCase().split(' ')

    let result = titleArray.map((e, i) => {
        if (i === 0 || !minorWordsArray.includes(e)) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        } else {
            return e
        }
    })
    return result.join(' ')
}