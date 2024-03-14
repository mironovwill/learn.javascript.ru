//Исправьте функцию, теряющую "this"

function askPassword(ok, fail) {
  let password = "rockstar";
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//Использование частично применённой функции для логина
function askPassword2(ok, fail) {
  let password = "rockstar";
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user2.login.bind(user, true), user2.login.bind(user, false));
