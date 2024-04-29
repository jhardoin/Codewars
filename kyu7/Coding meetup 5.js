function countLanguages(list) {
    return list.reduce((a, b) => {
      a[b.language] = (a[b.language] || 0) + 1
      return a;
    }, {})
  }