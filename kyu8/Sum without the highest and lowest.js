function sumArray(array) {
    if (array == null) return 0;
    if (array.length <= 2) return 0;
    else {
        array = array.sort(function(a,b) {return a - b;});
        let total = 0;
        for (let i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

function sumArray(array) {
    if(array == null || array.length <= 2) return 0
    return array.sort((a,b) => a - b).slice(1, array.length - 1).reduce((a,b) => a + b)
  }