function containAllRots(strng, arr) {
    if (strng === "") return true
    
    const rotations = []
    for (let i = 0; i < strng.length; i++) {
        rotations.push(strng.slice(i) + strng.slice(0, i))
    }

    return rotations.every(rotation => arr.includes(rotation))
}