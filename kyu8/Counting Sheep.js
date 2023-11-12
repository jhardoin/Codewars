const countSheeps = arrayOfSheep => arrayOfSheep.filter(e => e == true).length

const countSheeps = sheep => sheep.filter(e => e == true).length

const countSheeps = sheep => sheep ? sheep.filter(e => e == true).length : 0