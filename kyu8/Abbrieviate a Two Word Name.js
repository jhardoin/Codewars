function abbrevName(name){
    let [first, last] = name.split(' ');
    return first[0].toUpperCase() + '.' + last[0].toUpperCase();
}



const abbrevName = n => n.toUpperCase().split(' ')[0][0] + '.' + n.toUpperCase().split(' ')[1][0]

function abbrevName(name){
    let n = name.split(' ')
    return n[0][0].toUpperCase() + '.' + n[1][0].toUpperCase()
}

