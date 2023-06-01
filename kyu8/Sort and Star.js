function twoSort(s) {
    s.sort();
    const firstLetter = s[0];
    return firstLetter.split('').join('***');
  }