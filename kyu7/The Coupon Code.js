function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)) return true
    else return false
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }

  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}