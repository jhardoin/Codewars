function array(string) {
    let strArry = string.replace(/,/g, ' ').split(' ');
    return (strArry.length <= 2) ? null : strArry.slice(1, -1).join(' ')
  }