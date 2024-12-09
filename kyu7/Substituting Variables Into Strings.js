const solution = value => `Value is ${String(value).padStart(5, '0')}`

function solution(value){
    value = '0'.repeat(5 - value.toString().length) + value
    return `Value is ${value}`
  }

  function solution(value){
    return "Value is " + value.toString().padStart(5, '0')
}

function solution(value){
  return `Value is ${value.toString().padStart(5, '0')}`
}

function solution(value){
  return `Value is ${value.toString().padStart(5, '0')}`
}