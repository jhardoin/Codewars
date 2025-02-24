function wordValue(a) {
    return a.map((e, i) => [...e].reduce((a, b) => b !== ' ' ? a + b.charCodeAt(0) - 96 : a, 0) * (i + 1));
  }

  function wordValue(a) {
    return a.map((e, i) => [...e].reduce((a, b) => b !== ' ' ? a + b.charCodeAt(0) - 96 : a, 0) * (i + 1));
  }