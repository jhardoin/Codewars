const orderedCount = (text) =>{
    const arr = [...new Set([...text])]
    return arr.map(el => [el, [...text].filter(e => e === el).length]);
  }

  const orderedCount = function (text) {
    let a = [...new Set(text)]
    return a.map(e => [e, [...text].filter(el => el == e).length])
  }