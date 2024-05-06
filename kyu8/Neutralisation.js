function neutralise(s1, s2) {
    return [...s1].map((e,i) => e == s2[i] ? e : 0).join('')
  }