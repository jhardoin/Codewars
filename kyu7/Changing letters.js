function swap (string) {
    return [...string].map(e => 'aeiou'.includes(e) ? e.toUpperCase() : e).join('')
  }