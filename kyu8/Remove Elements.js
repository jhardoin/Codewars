const removeEveryOther = (arr) => arr.filter((item, index) => index % 2 === 0)

const removeEveryOther = arr => arr.filter((e,i) => !(i % 2))