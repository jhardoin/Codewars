function generateRange(min, max, step){
    return Array.from({length: (max - min) / step + 1}, (v, i) => min + i * step )
}

function generateRange(min, max, step){
    return Array.from({length: (max - min)/step + 1}, (e,i) => (i * step) + min)
}