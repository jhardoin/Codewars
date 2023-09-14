const humanYearsCatYearsDogYears = (humanYears) => {
    if (humanYears === 1) return [humanYears, 15, 15]
    if (humanYears === 2) return [humanYears, 24, 24]
    if (humanYears > 2) return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5]
    }

const humanYearsCatYearsDogYears = humanYears => {
    let catYears = (humanYears > 0 ? 15 : 0) + (humanYears > 1 ? 9 : 0) + (humanYears > 2 ? (humanYears - 2) * 4 : 0)
    let dogYears = (humanYears > 0 ? 15 : 0) + (humanYears > 1 ? 9 : 0) + (humanYears > 2 ? (humanYears - 2) * 5 : 0)
    return [humanYears, catYears, dogYears]
      }