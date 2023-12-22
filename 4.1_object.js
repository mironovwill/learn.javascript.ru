// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  for (let key in obj) return false;
  return true;
}

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете? - ответ: да

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const calcSalary = obj => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
};

const salariesSum = calcSalary(salaries);
console.log(salariesSum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = menu => {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

console.log(menu);
