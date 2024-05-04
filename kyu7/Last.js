function last(...args) {
    let last = args[args.length - 1]
    if (Array.isArray(last)) return last[last.length - 1]
    if (typeof last === 'string') return last.slice(-1)
    return last
}
