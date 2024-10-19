// Даны три неубывающих массива чисел. Найти число, которое присутствует во всех трех массивах.
//     Input: [1,2,4,5], [3,3,4], [2,3,4,5,6]
//     Output: 4

function findCommonElements(arrays) {
    if (arrays.length === 0) return null

    let commonSet = new Set(arrays[0])

    for (let i in arrays) {
        const currentSet = new Set(arrays[i])

        commonSet = new Set(
            [...commonSet].filter((item) => currentSet.has(item))
        )
    }

    return [...commonSet]
}

const arrays = [
    [1, 2, 4, 5],
    [3, 3, 4],
    [2, 3, 4, 5, 6],
    [4, 5, 6, 7],
]

console.log(findCommonElements(arrays))
