//Сумма пользовательских чисел

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const num1 = +prompt("Введите число 1", "");
const num2 = +prompt("Введите число 2", "");
alert(num1 + num2);

//Почему 6.35.toFixed(1) == 6.3?
console.log(Math.ceil(6.35));

/*
Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

function readNumber() {
  const res = prompt("Введите число", "");
  if (res === "" || res === null) return null;

  if (typeof +res === "number" && !Number.isNaN(+res)) return alert(+res);

  return readNumber();
}

readNumber();

/*
    Случайное число от min до max
    важность: 2
    Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

    Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

    Пример работы функции:

    alert( random(1, 5) ); // 1.2345623452
    alert( random(1, 5) ); // 3.7894332423
    alert( random(1, 5) ); // 4.3435234525
*/

function random(max, min) {
  return Math.random() * (max - min) + min;
}

console.log(random(15, 10));

/*
    Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

    Любое число из интервала min..max должно появляться с одинаковой вероятностью.

    Пример работы функции:

    alert( randomInteger(1, 5) ); // 1
    alert( randomInteger(1, 5) ); // 3
    alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInteger(10, 15));
