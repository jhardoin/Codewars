const squareOrSquareRoot = (array) => array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : e * e);  

const squareOrSquareRoot = array => array.map(e=> Math.sqrt(e) % 1 == 0? Math.sqrt(e) : e * e)