const remove = string => string.endsWith('!') ?  string.slice(0,-1) : string;

function remove (string) {
    return string[string.length - 1] == '!' ? string.split('').slice(0, string.length - 1).join('') : string
  }

  function remove (string) {
    return string[string.length - 1] == '!' ? string.slice(0, -1) : string
  }

  function remove (string) {
    return string.endsWith('!') ? string.slice(0,-1) : string
  }

  function remove (string) {
    return string.endsWith('!') ? string.slice(0,-1) : string
  }