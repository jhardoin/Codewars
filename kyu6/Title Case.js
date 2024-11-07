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

function titleCase(title, minorWords) {
    if(title.length === 0) return ''
    let tArr = title.toLowerCase().split(' ')
    let mArr = minorWords ? minorWords.toLowerCase().split(' ') : []
    let arr = []
    
    for(let i = 0; i < tArr.length; i++){
      if(i === 0 || !mArr.includes(tArr[i])){
        arr.push(tArr[i][0].toUpperCase() + tArr[i].slice(1))
      } else arr.push(tArr[i])
    }
    return arr.join(' ')
}

function titleCase(title, minorWords) {
    if(title.length === 0) return ''
    let tArr = title.toLowerCase().split(' ')
    let mArr = minorWords ? minorWords.toLowerCase().split(' ') : []
    let arr = []
    
    for(let i = 0; i < tArr.length; i++){
      if(i === 0 || !mArr.includes(tArr[i])){
        arr.push(tArr[i][0].toUpperCase() + tArr[i].slice(1))
      } else arr.push(tArr[i])
    }
    return arr.join(' ')
}