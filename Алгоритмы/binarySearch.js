function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (target === arr[mid]) {
            return mid
        }

        if (target < arr[mid]) {
            right = arr[mid] - 1
        }

        if (target > arr[mid]) {
            left = arr[mid] + 1
        }
    }

    return null
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 5))
