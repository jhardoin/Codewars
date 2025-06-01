function contamination(text, char){
    if (text.length === 0 || char.length === 0) return "";
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += char;
    }
    return result;
}

function contamination(text, char){
    return char.repeat(text.length)
  }

  function contamination(text, char){
    return char.repeat(text.length)
  }