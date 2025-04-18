function addLetters(...letters) {
    if (letters.length === 0) return 'z';
    const sum = letters.map(letter => letter.charCodeAt(0) - 96).reduce((a, b) => a + b, 0);
    const result = (sum % 26) + 96;
    return String.fromCharCode(result === 96 ? 122 : result);
}

function addLetters(...letters) {
    if(letters.length === 0) return 'z'
    let l = letters.reduce((a,b) => a + (b.charCodeAt() - 96), 0) % 26
    return String.fromCharCode((l === 0 ? 26 : l) + 96)
}

function addLetters(...letters) {
    if(letters.length === 0) return 'z'
    let l = letters.reduce((a,b) => a + (b.charCodeAt() - 96), 0) % 26
    return String.fromCharCode((l === 0 ? 26 : l) + 96)
}

function addLetters(...letters) {
    if(letters.length === 0) return 'z'
    let l = letters.reduce((a,b) => a + (b.charCodeAt() - 96), 0) % 26
    return String.fromCharCode((l === 0 ? 26 : l) + 96)
}