/*
#1 
    "if (строка с нулём)"
        Выведется ли alert?
            if ("0") {
             alert( 'Привет' );
            }
*/

//da

/*
#2 
    "Название JavaScript"
        Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
        Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

const result = prompt("Какое «официальное» название JavaScript?", "ECMAScript");

if (result === "ECMAScript") {
  return alert("Верно!");
} else {
  return alert("Не знаете? ECMAScript!");
}

/*
#3 
    "Покажите знак числа"
       Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
        1, если значение больше нуля,
        -1, если значение меньше нуля,
        0, если значение равно нулю.
        Предполагается, что пользователь вводит только числа.
*/

const result2 = prompt("Введите число", "1");

if (result2 > 0) {
  return 1;
} else if (result2 < 0) {
  return -1;
} else {
  return 0;
}

/*
#4 
    "Перепишите 'if..else' в '?'"
        Перепишите if..else с использованием нескольких операторов '?'.
        Для читаемости рекомендуется разбить код на несколько строк.

        let message;

        if (login == 'Сотрудник') {
        message = 'Привет';
        } else if (login == 'Директор') {
        message = 'Здравствуйте';
        } else if (login == '') {
        message = 'Нет логина';
        } else {
        message = '';
        }
*/
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
