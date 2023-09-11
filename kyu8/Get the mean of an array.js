function getAverage(marks){
  return Math.floor((marks.reduce((a,b ) => a + b))/marks.length)
}

const getAverage = marks => Math.floor(marks.reduce((a,b) => a + b)/marks.length)