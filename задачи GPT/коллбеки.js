/*
Таймер с коллбеком: Напишите функцию setDelay(delay, callback), 
которая вызывает коллбек после указанной задержки в миллисекундах.
*/

function setDelay(delay, callback) {
  setTimeout(() => {
    return callback();
  }, delay);
}

const printHello = () => console.log("Hello world!");

setDelay(2000, printHello);

/*
Фильтрация массива с коллбеком: Напишите функцию filterArray(array, callback), которая принимает массив и коллбек-функцию. 
Коллбек-функция должна возвращать true или false для каждого элемента массива. Функция filterArray должна вернуть новый массив, 
содержащий только те элементы, для которых коллбек-функция вернула true.
 */

function filterArray(array, callback) {
  return array.filter(callback);
}

const arr = filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], el => el > 5);

console.log(arr);

/*
Преобразование массива с коллбеком: Напишите функцию mapArray(array, callback), 
которая принимает массив и коллбек-функцию. 
Коллбек-функция должна принимать каждый элемент массива и возвращать новое значение. 
Функция mapArray должна вернуть новый массив, содержащий преобразованные значения.
 */

function mapArray(array, callback) {
  return array.map(callback);
}

/*
Сумма чисел с коллбеком: Напишите функцию sumNumbers(a, b, callback), 
которая принимает два числа и коллбек-функцию. 
Функция должна вычислить сумму чисел и передать результат в коллбек-функцию.
 */

function sumNumbers(a, b, callback) {
  const sum = a + b;
  return callback(sum);
}

/*
Асинхронная загрузка данных:
Напишите функцию loadData, которая принимает URL ресурса и коллбек функцию. Функция должна загружать данные по указанному URL и передавать их в коллбек функцию.
javascript
*/

function loadData(url, callback) {
  return fetch(url)
    .then(data => data.json())
    .catch(() => new Error("error"))
    .then(callback);
}

loadData("https://catfact.ninja/fact", data => console.log(data));
