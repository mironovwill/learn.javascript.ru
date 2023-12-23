const array1 = [5, 12, 8, 130, 44];

function myAt(arr, index) {
  if (index < 0) {
    const positiveIndex = (index *= -1);
    return arr[arr.length - positiveIndex];
  } else {
    return arr[index];
  }
}

console.log(myAt(array1, -3));
