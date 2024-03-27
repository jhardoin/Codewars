function countDevelopers(list) {
    return list.filter(e => e.continent === 'Europe' && e.language === 'JavaScript').length
}