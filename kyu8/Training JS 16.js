function cutIt(arr) {
  let lenArray = [];
  const shortestLength = Math.min(...arr.map(e => e.length));
  const resultArray = arr.map(str => str.slice(0, shortestLength));
  return resultArray;
}