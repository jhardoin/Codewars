function dutyFree(normPrice, discount, hol){
    let discPrice = ((normPrice * discount * .01));
    return Math.floor(hol/discPrice)
}