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

function validBraces(braces) {
    let stack = []
    let braceMap = { '(': ')', '{': '}', '[': ']'}

    for (let i = 0; i < braces.length; i++) {
        if (braceMap[braces[i]]) {
            stack.push(braces[i])
        } else {
            if (braceMap[stack.pop()] !== braces[i]) {
                return false
            }
        }
    }
    return stack.length === 0
}