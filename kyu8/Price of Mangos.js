const mango = (quantity, price) => (quantity < 3) ? quantity * price: (quantity - Math.floor(quantity/3)) * price;

function mango(quantity, price){
    return quantity % 3 == 0 ? 2/3 * quantity * price : 
    ((Math.floor(quantity/3) * 2) + quantity % 3) * price
  }