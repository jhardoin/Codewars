function pattern(n){
    let result = []
    for (let i = 1 ; i <= n; i++){
      result.push(i.toString().repeat(i))
    }
    return result.join('\n')
}