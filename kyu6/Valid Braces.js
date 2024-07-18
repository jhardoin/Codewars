function validBraces(braces) {
    let stack = []
    let braceMap = { '(': ')', '{': '}', '[': ']'}

    for (let i = 0; i < braces.length; i++) {
        let currentChar = braces[i]
        if (braceMap[currentChar]) {
            stack.push(currentChar)
        } else {
            const lastOpenedBrace = stack.pop()
            if (braceMap[lastOpenedBrace] !== currentChar) {
                return false
            }
        }
    }
    return stack.length === 0
}