function squareDigits(num){
    let numString = num.toString().split('');
    let numArray = numString.map((numString) => parseInt(numString));
    let sqNum = numArray.map((numArray) => numArray ** 2);
    return parseInt(sqNum.join(''))
}
