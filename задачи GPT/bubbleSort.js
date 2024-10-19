function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            const tmp = arr[j]

            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }

    return arr
}

console.log(bubbleSort([1, 251, 16, 124, 12512, 25, 236]))
