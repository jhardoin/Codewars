const quarterOf = (month) => {
    if(month < 4) {
      return 1;
    }
    else if(month < 7) {
      return 2;
    }
    else if (month < 10) {
      return 3;
    }
    else {
      return 4
    }
  }

  const quarterOf = month => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4