function newAvg(arr, newavg) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let expectedDonation = Math.ceil((newavg * (arr.length + 1)) - sum)
    if (expectedDonation <= 0) throw new Error("Expected New Average is too low")
    return expectedDonation
}