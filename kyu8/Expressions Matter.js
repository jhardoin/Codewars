const expressionMatter = (a, b, c) => {
    let totalOne = (a + b) * c;
    let totalTwo = a * (b + c);
    let totalThree = a * b * c;
    let totalFour = a + b + c;
      return Math.max(totalOne, totalTwo, totalThree, totalFour);
  }

  const expressionMatter = (a, b, c) => Math.max(a * (b + c), a * b * c, a + b + c, (a + b) * c)