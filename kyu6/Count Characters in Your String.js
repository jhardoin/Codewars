function count(string) {
    if (string.length < 1) return {};
    let solution = {};
    for (var i = 0; i < string.length; i++) {
      solution[string[i]] = (solution[string[i]] || 0) + 1;
    }
    return solution;
  }