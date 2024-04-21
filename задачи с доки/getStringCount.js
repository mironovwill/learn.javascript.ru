function getStringCount(data) {
    let count = 0

    if (data === null) return null

    if (typeof data === 'string') count++

    if (Array.isArray(data)) {
        return data.map(el => typeof el === "string" ? count++ : null)
    }

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "object") {
            return getStringCount(data[i])
        }
    }

    return count
}

console.log(getStringCount({
        first: '1',
        second: {prop: '2'},
        third: false,
        fourth: ['anytime', 2, 3, 4],
        fifth: null,
    })
)