function gps(s, x) {
	return Math.max(...x.slice(1).map((e, i) => (e - x[i]) / s * 3600)) | 0
}

function gps(s, x) {
    let arr = []
    for(let i = 0; i < x.length - 1; i++){
      arr.push(x[i + 1] - x[i])
    }
    let result = (arr.map(e => 3600 * e / s))
    return x.length > 1 ? Math.floor(Math.max(...result)) : 0
}
