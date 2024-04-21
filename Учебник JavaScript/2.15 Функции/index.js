//Перепишите функцию, используя оператор '?' или '||'

const checkAgeSecond = (age) => age > 18 || confirm('Родители разрешили?');
const checkAgeThird = (age) => age > 18 ? true : confirm('Родители разрешили?');

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

const min = (a,b) => a < b ? console.log(a) : console.log(b)

min(2, 5)
min(3, -1)
min(1, 1)

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

const pow = (x,n) => x ** n

pow(1,5)