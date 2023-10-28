const enough = (cap, on, wait) => (on + wait >= cap) ? (on + wait) - cap : 0

const enough = (cap, on, wait) => (cap - on - wait) > 0 ? 0 : Math.abs(cap-on-wait)

const enough = (cap, on, wait) => on + wait <= cap ? 0 : Math.abs(cap - on - wait)