function whatday(num) { 
    if(num === 1) return "Sunday";
    if(num === 2) return "Monday";
    if(num === 3) return "Tuesday";
    if(num === 4) return "Wednesday";
    if(num === 5) return "Thursday";
    if(num === 6) return "Friday";
    if(num === 7) return "Saturday";
    else return "Wrong, please enter a number between 1 and 7"
}

function whatday(num) { 
    let days =
    {1 : "Sunday",
    2 : "Monday",
    3 : "Tuesday",
    4 : "Wednesday",
    5 : "Thursday",
    6 : "Friday",
    7 : "Saturday"}
    
    return num > 0 && num < 8 ? days[num] : 'Wrong, please enter a number between 1 and 7'
    }