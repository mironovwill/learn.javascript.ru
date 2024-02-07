//Деструктурирующее присваивание

let user = {
  name: "John",
  years: 30,
};

const { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

//Максимальная зарплата

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 300,
  Mary: 250,
};

let emptySalaries = {};

function topSalary(salaries) {
  let max = 0;
  let name = null;

  for (let [key, value] of Object.entries(salaries)) {
    if (value > max) {
      max = value;
      name = key;
    }
  }
  return name;
}

console.log(topSalary(salaries));
console.log(topSalary(emptySalaries));
