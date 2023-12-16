function array(string) {
    let strArry = string.replace(/,/g, ' ').split(' ');
    return (strArry.length <= 2) ? null : strArry.slice(1, -1).join(' ')
  }

  function array(string) {
    if(string.split(',').length < 3) return null
    else return string.split(',').slice(1,string.split(',').length - 1).join(' ')
  }