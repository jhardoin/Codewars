function pigIt(str) {
    let strArry = str.split(' ');
    let solution = strArry.map(e => e.slice(1) + e[0] + 'ay').join(' ');
    if (solution.endsWith('!ay')){
      return solution.slice(0, -2);
    }
    if (solution.endsWith('?ay')){
      return solution.slice(0, -2);
    }
    else return solution
    }

    function pigIt(str) {
        return str.replace(/\w+/g, (w) => {
          return w.slice(1) + w[0] + 'ay';
        });
      }