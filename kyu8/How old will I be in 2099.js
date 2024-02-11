function  calculateAge(b, c) {
    if(b == c) return "You were born this very year!"
    if(c - b == 1) return "You are 1 year old."
    if(c - b == -1) return "You will be born in 1 year."
    if(c - b > 1) return `You are ${c - b} years old.`
    else return `You will be born in ${b - c} years.`
}

function  calculateAge(a,b) {
    return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
           a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
           `You were born this very year!`
  }