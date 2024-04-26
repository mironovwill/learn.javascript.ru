Array.prototype.copy = function (count) {
  if (count < 0) return [];
  return Array(count).fill(this).flat();
};

console.log([1, 2, 3].copy(2)); // [1,2,3,1,2,3]
console.log([4].copy(3)); // [4,4,4]
console.log([1, 2, 3].copy(1)); // [1,2,3]
console.log([1, 2, 3].copy(-1)); // []
console.log([1, 2, 3].copy(0)); // []
console.log([1, 2, 3].copy()); //[1,2,3]
