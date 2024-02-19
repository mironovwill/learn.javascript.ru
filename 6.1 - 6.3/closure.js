//Сумма с помощью замыканий

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); //3
console.log(sum(5)(-1)); //4

//Фильтрация с помощью функции

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//Сортировать по полю

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function sortByField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

console.log(users.sort(sortByField("name")));
console.log(users.sort(sortByField("age")));

//Армия функций

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
