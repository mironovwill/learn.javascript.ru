//Что выведет код ниже?
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(data => console.log(data));

//тут будет 1 тк использовать resolve можно только 1 раз

/*
Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/

const delay = ms =>
  new Promise(res =>
    setTimeout(() => {
      res();
    }, ms)
  );

delay(3000).then(() => console.log("выполнилось через 3 секунды"));
