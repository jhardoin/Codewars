const lowercaseCount = str => (str.match(/[a-z]/g) || []).length

function lowercaseCount(str){
    return [...str].filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e)).length
}