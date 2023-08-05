function myLanguages(results) {
    return Object.keys(results).filter(e => results[e] > 59).sort((a,b) => results[b] - results[a])
  }