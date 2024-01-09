//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
const ucFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = str =>
  str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxxxx");

// console.log(checkSpam("buy ViAgRA now") == true);
// console.log(checkSpam("free xxxxx") == true);
// console.log(checkSpam("innocent rabbit") == true);

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
const truncate = (str, maxlength) =>
  str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;

console.log(
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ===
    "Вот, что мне хотело…"
);

console.log(truncate("Всем привет!", 20) === "Всем привет!");

//Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = str => +str.slice(1);

console.log(extractCurrencyValue("$120"));
