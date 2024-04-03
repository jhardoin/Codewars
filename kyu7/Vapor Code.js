function vaporcode(string) {
    return [...string.toUpperCase()].filter(e => e!== ' ').join('  ')
  }