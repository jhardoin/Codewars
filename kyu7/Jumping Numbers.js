function jumpingNumber(n) {
    let str = n.toString()
    for (let i = 0; i < str.length - 1; i++) {
        if (Math.abs(+(str[i]) - +(str[i + 1])) !== 1) {
            return 'Not!!'
        }
    }
    return 'Jumping!!'
}