function squareDigits(num){
    let numString = num.toString().split('');
    let numArray = numString.map((numString) => parseInt(numString));
    let sqNum = numArray.map((numArray) => numArray ** 2);
    return parseInt(sqNum.join(''))
}


const squareDigits = num => +[...num.toString()].map(e => +e * +e).join('')

const squareDigits = num => +[...num.toString()].map(e => (e ** 2).toString()).join('')

function squareDigits(num){
    return +[...String(num)].map(e => e * e).join('')
  }

  function squareDigits(num){
    return +[...num.toString()].map(e => e ** 2).join('')
  }