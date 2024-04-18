function narcissistic(value) {
    return value === value.toString().split('').reduce((a, b) => a + Math.pow(+b, value.toString().length), 0);
}