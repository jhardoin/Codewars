function rot13(message){
    let arr = message.split('').map(e => {
      if('abcdefghijklmnopqrstuvwxyz'.includes(e)) return String.fromCharCode(((e.charCodeAt() - 97 + 13) % 26) + 97)
      else if('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(e)) return String.fromCharCode(((e.charCodeAt() - 65 + 13) % 26) + 65)
      else return e
    })
    return arr.join('')
}