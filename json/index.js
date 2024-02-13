//Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35,
};

const jsonUser = JSON.parse(JSON.stringify(user));

console.log(jsonUser);

//Исключить обратные ссылки

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

const replace = (key, value) => {
  return key != "" && value == meetup ? undefined : value;
};

console.log(JSON.stringify(meetup, replace));
