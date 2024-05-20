var min = list => Math.min(...list)
var max = list => Math.max(...list)

const min = list => Math.min(...list)
const max = list => Math.max(...list)

var min = function(list){
    return Math.min(...list);
}
var max = function(list){
    return Math.max(...list);
}

var min = function(list){
    return Math.min(...list)
}
var max = function(list){
    return Math.max(...list)
}

var min = function(list){
    list.sort((a,b) => a - b)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => b - a)
    return list[0];
}