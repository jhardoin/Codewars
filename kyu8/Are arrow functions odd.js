const odds = (values) => values.filter(e => e % 2 === 1);

const odds = values => values.filter(e => e & 2 !== 0)