function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

const removeExclamationMarks = s => [...s].filter(e => e !== '!').join('')