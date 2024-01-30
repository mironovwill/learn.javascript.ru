// ---------------------------------------------------------------------------------
// 1. При создании своего "Меню Путешественника" вы решили добавить в него новые блюда.
//    Добавьте несколько уникальных блюд в конец меню.

const newTravelerMenu = (menu, newDishes) => [...menu, ...newDishes];

const travelerMenu = ["Pasta", "Pizza", "Salad"];
const newDishes = ["Sushi", "Burger", "Curry"];

console.log(newTravelerMenu(travelerMenu, newDishes));

// ---------------------------------------------------------------------------------
// 2. В вашем городе прошло музыкальное событие, и несколько артистов решили подарить вам свои CD.
//    Удалите последний полученный CD из вашей коллекции.

function newCdCollection(collection) {
  collection.pop();
  return collection;
}

const cdCollection = ["Artist1 CD", "Artist2 CD", "Artist3 CD"];

console.log(newCdCollection(cdCollection));

// ---------------------------------------------------------------------------------
// 3. Вы решили поддержать идею вегетарианства и удалить из своего рациона первый завтрак.
//    Удалите первый прием пищи из вашего "Рациона Здоровья".

function newHealthyDiet(diet) {
  diet.shift();
  return diet;
}

const healthyDiet = ["Oatmeal", "Fruit Salad", "Smoothie"];

console.log(
  "Рацион Здоровья после удаления первого завтрака:",
  newHealthyDiet(healthyDiet)
);

// ---------------------------------------------------------------------------------
// 4. Ваш друг шеф-повар предложил вам попробовать новое блюдо, которое он только что приготовил.
//    Добавьте это блюдо в начало вашего "Особенного Меню".

function newSpecialMenu(menu, dish) {
  menu.unshift(dish);
  return menu;
}

const specialMenu = ["Special Soup", "Special Pasta", "Special Dessert"];
const newDish = "Special Curry";

console.log(
  "Особенное Меню после добавления нового блюда:",
  newSpecialMenu(specialMenu, newDish)
);

// ---------------------------------------------------------------------------------
// 5. Вы решили объединить меню вашего ресторана с меню соседнего ресторана и создать новый.
//    Объедините оба меню в одно "Эклектичное Меню".

const neWeclecticMenu = (youMenu, otherMenu) => [...yourMenu, ...otherMenu];

const yourMenu = ["Appetizer", "Main Course", "Dessert"];
const neighborMenu = ["Soup", "Salad", "Side Dish"];

console.log("Эклектичное Меню:", neWeclecticMenu(yourMenu, neighborMenu));

// ---------------------------------------------------------------------------------
// 6.Перечислите все блюда в вашем меню yourMenu и выделите их с помощью пригласительной речи
//    для ваших дорогих посетителей.

function invitingSpeech(yourMenu, speech) {
  console.log(speech);
  for (let key of yourMenu) {
    console.log(key);
  }
}

const yourMenu2 = ["Appetizer", "Main Course", "Dessert"];

const speech =
  "Дорогие гости, добро пожаловать в наш ресторан! Позвольте представить вам наше меню:";

invitingSpeech(yourMenu2, speech);

// ---------------------------------------------------------------------------------
// 7. Вы устроили вечеринку с викториной, и каждый участник получил уникальный номер.
//    Найдите номер участника с правильным ответом.

function thisCorrectAnswerIndex(participants, correctAnswer) {
  for (let index in participants) {
    if (participants[index] === correctAnswer) {
      return index;
    }
  }
}

const quizParticipants = [123, 456, 789, 101, 202];
const correctAnswerParticipant = 789;

console.log(
  "Номер участника с правильным ответом:",
  thisCorrectAnswerIndex(quizParticipants, correctAnswerParticipant)
);

// ---------------------------------------------------------------------------------
// 8. Ваша кухня теперь ориентирована на заботу о клиенте, и вы решили предложить
//    только блюда для тех, кто следит за своим здоровьем.
//    Оставьте только те блюда, которые подходят под концепцию "Здоровой Еды".

const onlyHealthyOptions = menu => menu.filter(el => el !== "Grilled Chicken");

const healthAwareMenu = [
  "Salad",
  "Grilled Chicken",
  "Quinoa Bowl",
  "Fruit Smoothie",
];

console.log("Блюда для Здоровой Еды:", onlyHealthyOptions(healthAwareMenu));

// ------------------------------------------------------------------------------------------------
// 10 Задание

const newMichelinStarMenu = starManu =>
  starManu.sort((a, b) => a.localeCompare(b));

const michelinStarMenu = ["Dessert", "Appetizer", "Main Course", "Salad"];

console.log(
  "Блюда в алфавитном порядке:",
  newMichelinStarMenu(michelinStarMenu)
);

// Дополнительные задачи
// ------------------------------------------------------------------------------------------------
// Учитывая набор чисел, верните аддитивную обратную величину каждого из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

function invert(arr) {
  return arr.map(el => (el < 0 ? Math.abs(el) : el * -1));
}

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []

// Дополнительные задачи 2
// ------------------------------------------------------------------------------------------------
// На этот раз ни истории, ни теории. В примерах ниже показано, как написать функцию accum:
// Параметр accum представляет собой строку, включающую только буквы от a..zи A..Z.

function accum(str) {
  return str
    .toUpperCase()
    .split("")
    .map((el, i) => {
      return (el += el.repeat(i).toLowerCase());
    })
    .join("-");
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"
