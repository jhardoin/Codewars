function  calculateAge(b, c) {
    if(b == c) return "You were born this very year!"
    if(c - b == 1) return "You are 1 year old."
    if(c - b == -1) return "You will be born in 1 year."
    if(c - b > 1) return `You are ${c - b} years old.`
    else return `You will be born in ${b - c} years.`
}