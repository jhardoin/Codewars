function count(string) {
    if (string.length < 1) return {};
    let solution = {};
    for (var i = 0; i < string.length; i++) {
      solution[string[i]] = (solution[string[i]] || 0) + 1;
    }
    return solution;
  }

  function count(string) {
    let obj = {}
    string.split('').map(e => obj[e] ? obj[e]++ : obj[e] = 1)
    return obj
  }

  function count(string) {
    let obj = {}
    string.split('').map(e => obj[e] = obj[e] + 1 || 1)
    return obj
  }

  function count(string) {
    let obj = {}
    string.split('').map(e => obj[e] = obj[e] + 1 || 1)
    return obj
  }

  function count(string) {
    let o = {}
    string.split('').map(e => o[e] = o[e] + 1 || 1)
    return o
}

function count(string) {
  let obj = {}
  string.split('').forEach(e => obj[e] = obj[e] + 1 || 1)
  return obj
}

function count(string) {
  let obj = {}
  string.split('').forEach(e => obj[e] = obj[e] + 1 || 1)
  return obj
}

function count(string) {
  let obj = {}
  string.split('').forEach(e => obj[e] = obj[e] + 1 || 1)
  return obj
}