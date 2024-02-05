let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const unique = arr => [...new Set(arr)];

console.log(unique(values));

/*-------------------*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = arr => {
  const res = arr.map(el => el.toLowerCase().split("").sort().join(""));
  return [...new Set(res)];
};

console.log(aclean(arr));

/*-------------------*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);
