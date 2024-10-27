function solve(s) {
    let upperCase = (s.match(/[A-Z]/g) || []).length;
    let lowerCase = (s.match(/[a-z]/g) || []).length;
    let nums = (s.match(/\d/g) || []).length;
    let special = (s.match(/[^A-Za-z\d]/g) || []).length;
    
    return [upperCase, lowerCase, nums, special];
  }

  function solve(s){
    let nums = 0
    let upperCase = 0
    let lowerCase = 0
    let special = 0
    
    s.split('').forEach(e => {
        if ('0123456789'.includes(e)) {
            nums++
        } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e) !== -1) {
            upperCase++
        } else if ('abcdefghijklmnopqrstuvwxyz'.indexOf(e) !== -1) {
            lowerCase++
        } else {
            special++
        }
    })

    return [upperCase, lowerCase, nums, special]
}

function solve(s){
    let nums = 0
    let upperCase = 0
    let lowerCase = 0
    let special = 0
    
    s.split('').forEach(e => {
        if ('0123456789'.includes(e)) {
            nums++
        } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e) !== -1) {
            upperCase++
        } else if ('abcdefghijklmnopqrstuvwxyz'.indexOf(e) !== -1) {
            lowerCase++
        } else {
            special++
        }
    })

    return [upperCase, lowerCase, nums, special]
}