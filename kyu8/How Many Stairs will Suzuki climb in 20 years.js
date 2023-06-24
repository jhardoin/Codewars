function stairsIn20(s){
    let sunday = s[0].reduce((a,c) => a + c);
    let monday = s[1].reduce((a,c) => a + c);
    let tuesday = s[2].reduce((a,c) => a + c);
    let wednesday = s[3].reduce((a,c) => a + c);
    let thursday = s[4].reduce((a,c) => a + c);
    let friday = s[5].reduce((a,c) => a + c);
    let saturday = s[6].reduce((a,c) => a + c);
    return 20 * (sunday + monday + tuesday + wednesday + thursday + friday + saturday)
    }