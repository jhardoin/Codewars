const maxDiff = list => list.length < 2 ? 0 : Math.max(...list) - Math.min(...list)

function maxDiff(list) {
    return list.length > 0 ? Math.max(...list) - Math.min(...list) : 0
  }

  function maxDiff(list) {
    return list.length > 0 ? Math.max(...list) - Math.min(...list) : 0
};