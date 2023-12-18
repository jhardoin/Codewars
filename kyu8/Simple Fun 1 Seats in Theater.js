function seatsInTheater(nCols, nRows, col, row) {
    return (nCols * nRows) - ((nRows * (col - 1)) + ((nCols - (col - 1)) * row));
  }

  function seatsInTheater(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - col + 1)
  }