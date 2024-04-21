function hasArrays(arr) {
    return arr.some(item => Array.isArray(item))
}

const data1 = [false, true, [1, 2], {}, [], 1, "e", NaN];
console.log(hasArrays(data1)); // true
const data2 = [];
console.log(hasArrays(data2)); // false