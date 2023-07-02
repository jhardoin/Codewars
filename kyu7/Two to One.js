function longest(s1, s2) {
    let str = (s1 + s2).split('').sort()
    let uniqueNames = (str.filter((item, pos ,self) => self.indexOf(item) == pos)).join('');
    return uniqueNames
}