const uniqueInOrder = iterable => {
    if(typeof iterable == 'string') return iterable.replace(/(.)\1+/g, '$1').split('')
    if(typeof iterable == 'object' && typeof iterable[0] !== 'number') return iterable.join('').replace(/(.)\1+/g, '$1').split('')
    else return (iterable.join('').replace(/(.)\1+/g, '$1')).split('').map(e => Number(e))
}