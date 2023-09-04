function abbrevName(name){
    let [first, last] = name.split(' ');
    return first[0].toUpperCase() + '.' + last[0].toUpperCase();
}



const abbrevName = n => n.toUpperCase().split(' ')[0][0] + '.' + n.toUpperCase().split(' ')[1][0]
