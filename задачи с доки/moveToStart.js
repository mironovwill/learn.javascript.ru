function moveToStart(arr, n) {
    const newArray = arr.slice()
    const deletedEl = newArray.splice(0, n - 1)

    newArray.push(deletedEl)

    return newArray.flat()
}


console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]