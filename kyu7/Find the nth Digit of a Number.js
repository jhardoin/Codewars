const findDigit = (num, nth) => {
    if (nth <= 0) {
      return -1;
    }
    num = Math.abs(num);
    let numStr = num.toString();
    if (nth > numStr.length) {
      return 0;
    }
    return +numStr[numStr.length - nth];
  };

  const findDigit = (num, nth) => nth > 0 ? +[...`${num}`].reverse()[nth - 1] || 0 : -1;