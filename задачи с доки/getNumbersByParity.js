function getNumbersByParity(data, parity) {
  return data.filter(num =>
    parity === "even" ? num % 2 === 0 : num % 2 !== 0
  );
}

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];
