function colourAssociation(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let obj = {};
      obj[array[i][0]] = array[i][1]
      result.push(obj)
    }
    return result
  }