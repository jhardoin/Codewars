const bonusTime = (salary, bonus) => (bonus === true) ? "£" + (salary * 10) : "£" + salary

const bonusTime = (salary, bonus) => bonus ? '£' + salary * 10 : '£' + salary

const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`