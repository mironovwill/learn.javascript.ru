let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

console.log(sumSalaries(salaries)); // 650

/*-------------------*/

let user = {
  name: "John",
  age: 30,
};

const count = obj => Object.keys(obj).length;

console.log(count(user));
