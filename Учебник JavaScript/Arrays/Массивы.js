/*
№1 Скопирован ли массив?
Что выведет следующий код?
*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(fruits.length);
// length будет равен 3 тк была передана ссылка на объект
/*-------------------------------------------*/

/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
*/

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(Math.floor(styles.length / 2), 1, "Классика");
const deletedItem = styles.shift();
console.log(deletedItem);
styles.unshift("Регги");
styles.unshift("Рэп");
console.log(styles);

/*-------------------------------------------*/

/*
Вызов в контексте массива

Каков результат? Почему?
*/

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2]();

//this будет ссылаться на array. так как array - тоже объект

/*-------------------------------------------*/

/*
Сумма введённых чисел

Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
  const res = [];
  let count = 0;

  while (true) {
    let number = prompt("Введите число", "");

    if (number === "" || Number.isNaN(+number)) {
      console.log(count);
      break;
    }

    count += +number;
    res.push(+number);
  }
}

sumInput();

/*-------------------------------------------*/

/*
Подмассив наибольшей суммы

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)

Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
getMaxSubSum([-1, -2, -3]) = 0
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);
/*-------------------------------------------*/
