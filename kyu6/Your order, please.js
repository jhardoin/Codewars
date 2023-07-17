function order(words) {
    return words.split(' ')
                .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
                .join(' ');
  }