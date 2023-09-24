const _if = (bool, func1, func2) => (bool == true) ? func1() : func2()

const _if = (bool, func1, func2) => bool ? func1() : func2()