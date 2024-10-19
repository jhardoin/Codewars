function myLanguages(results) {
    return Object.keys(results).filter(e => results[e] > 59).sort((a,b) => results[b] - results[a])
  }

  function myLanguages(results) {
    return Object.keys(results).filter(e => results[e] > 59).sort((a,b) => results[b] - results[a]);
  }

  function myLanguages(results) {
    let keys = Object.keys(results)
    return keys.filter(e => results[e] >= 60).sort((a,b) => results[b] - results[a])
}
