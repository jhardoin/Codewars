const orderedCount = (text) =>{
    const arr = [...new Set([...text])]
    return arr.map(el => [el, [...text].filter(e => e === el).length]);
  }

  const orderedCount = function (text) {
    let a = [...new Set(text)]
    return a.map(e => [e, [...text].filter(el => el == e).length])
  }

  const orderedCount = function (text) {
    let array = [...new Set([...text])]
     return array.map(e => [e, [...text].filter(el => e == el).length])
  }

  function orderedCount(text) {
    let arr = [...new Set([...text])]
    return arr.map(e => [e, [...text].filter(el => e == el).length])
  }