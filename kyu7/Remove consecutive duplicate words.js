function removeConsecutiveDuplicates(string) {
    return string.split(' ').filter((e,i,a) => e !== a[i + 1]).join(' ')
  }