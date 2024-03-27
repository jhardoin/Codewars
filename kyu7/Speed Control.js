function gps(s, x) {
	return Math.max(...x.slice(1).map((e, i) => (e - x[i]) / s * 3600)) | 0
}