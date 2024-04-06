function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0
    const frequencyCount = collection.reduce((count, num) => {
      count[num] = (count[num] || 0) + 1;
      return count;
    }, {})
  
    const maxFrequency = Math.max(...Object.values(frequencyCount))
    return maxFrequency || 0
  }

  function mostFrequentItemCount(collection) {
    let a = [...new Set([...collection])]
    let num = a.map(e => collection.filter(el => e == el).length)
    return collection.length ? Math.max(...num) : 0
  }