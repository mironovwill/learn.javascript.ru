// Создайте дату

const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//Покажите день недели
let euroDate = new Date(2012, 0, 3);

function getWeekDay(date) {
  const textDates = {
    0: "ВС",
    1: "ПН",
    2: "ВТ",
    3: "СР",
    4: "ЧТ",
    5: "ПТ",
    6: "СБ",
  };

  return textDates[date.getDay()];
}
console.log(getWeekDay(euroDate));

//День недели в европейской нумерации

let normalDate = new Date(2012, 0, 8);

const getLocalDay = date => date.getDay() || 7;
console.log(getLocalDay(normalDate));

//Какой день месяца был много дней назад?
let dateAgo = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);

  return newDate;
}

console.log(getDateAgo(dateAgo, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(dateAgo, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(dateAgo, 365)); // 2, (2 Jan 2014)

//Последнее число месяца?

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1).getUTCDate();
}

console.log(getLastDayOfMonth(2012, 1));

//Сколько сегодня прошло секунд?

function getSecondsToday() {
  const dateNow = new Date();
  return (
    dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds()
  );
}

console.log(getSecondsToday());

//Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

//Форматирование относительной даты

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "прямо сейчас";
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
