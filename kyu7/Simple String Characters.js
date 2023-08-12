function solve(s) {
    let upperCase = (s.match(/[A-Z]/g) || []).length;
    let lowerCase = (s.match(/[a-z]/g) || []).length;
    let nums = (s.match(/\d/g) || []).length;
    let special = (s.match(/[^A-Za-z\d]/g) || []).length;
    
    return [upperCase, lowerCase, nums, special];
  }