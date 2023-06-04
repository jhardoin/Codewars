function isPythagoreanTriple(integers) {
    integers.sort((a, b) => a - b);
    let [a, b, c] = integers;
    return c**2 === a**2 + b**2;
  }