function unluckyDays(year){
	return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}