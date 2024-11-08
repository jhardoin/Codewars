function sqInRect(lng, wdth) {
    if (lng === wdth) return null
    let arr = []

    while (lng !== wdth) {
        if (lng > wdth) {
            arr.push(wdth)
            lng = lng - wdth
        } else {
            arr.push(lng)
            wdth = wdth - lng
        }
    }
    arr.push(lng)
    return arr
}

function sqInRect(lng, wdth) {
    if (lng === wdth) return null
    let arr = []

    while (lng !== wdth) {
        if (lng > wdth) {
            arr.push(wdth)
            lng = lng - wdth
        } else {
            arr.push(lng)
            wdth = wdth - lng
        }
    }
    arr.push(lng)
    return arr
}