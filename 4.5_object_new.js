/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

  function A() { ... }
  function B() { ... }

  let a = new A();
  let b = new B();

  alert( a == b ); // true

Если да – приведите пример вашего кода.
*/

const object = {};

function A() {
    return object;
}
 
function B() {
    return object;
}

let a = new A();
let b = new B();

console.log(a == b);

/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function () {
        this.a = +prompt("Ведите первое число", 0);
        this.b = +prompt("Ведите второе число", 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

const newCalc = Calculator();

newCalc.read();
newCalc.sum();
newCalc.mul();

/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Сколько добавить?", 0);
    };
}

const acc = Accumulator(0);

acc.read();
