function closeCompare(a, b, margin){
    if(margin == undefined) margin = 0;
    if(Math.abs(a - b) - margin <= 0) return 0
    if(a < b) return -1
    else return 1
}