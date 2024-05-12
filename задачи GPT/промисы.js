/*
Загрузка данных с сервера:
Задача: Напиши функцию, которая загружает данные с сервера с помощью AJAX запроса и возвращает промис, который разрешается с данными, полученными от сервера.
Пример: Загрузка списка пользователей с сервера и вывод их имён на страницу.
*/

function getData(url) {
  return fetch(url).then(data => {
    if (!data.ok) {
      throw new Error("Request failed!");
    }

    return data.json();
  });
}

getData("https://catfact.ninja/fact")
  .then(data => console.log(data))
  .catch(e => console.log(e));

/*
Параллельное выполнение нескольких запросов:
Задача: Напиши функцию, которая выполняет несколько асинхронных операций параллельно и возвращает промис,
который разрешается, когда все операции завершены.
Пример: Получение информации о пользователях и их постах одновременно.
*/

function getDataParallel(firstUrl, secondUrl) {
  return Promise.all([firstUrl, secondUrl]);
}

getDataParallel(
  getData("https://catfact.ninja/fact"),
  getData("https://catfact.ninja/breeds")
).then(values => console.log(values));
