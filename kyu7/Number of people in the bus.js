const number = busStops => busStops.reduce((a, [x, y]) => a + x - y, 0)

var number = busStops => busStops.map(e => e[0] - e[1]).reduce((a,b) => a + b)