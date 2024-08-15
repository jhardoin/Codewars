function stringify(list) {
    let result = ""
    while (list !== null) {
        result += list.data + " -> "
        list = list.next
    }
    result += "null"
    return result
}

