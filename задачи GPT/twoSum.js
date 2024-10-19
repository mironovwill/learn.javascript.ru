function twoSum(arr, target) {
    const map = new Map()

    for (let i in arr) {
        const compliment = target - arr[i]

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }

        map.set(arr[i], i)
    }

    return null
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 2], 4))
