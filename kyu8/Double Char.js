function doubleChar(str) {
    let solution = '';
    for (const char of str)
      solution += char + char;
    return solution
}
