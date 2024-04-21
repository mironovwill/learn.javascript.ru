//Декоратор-шпион
function log(text) {
  console.log(text);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

// log = spy(log);
// log("Hello");
// log("Hi");
// console.log(log.calls);

//Задерживающий декоратор

function f(x) {
  console.log(x);
}

function delay(func, delay) {
  return function (...args) {
    setTimeout(() => func.apply(this, args), delay);
  };
}

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 2000);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 2000 мс

//debounce

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

// debounce(f, 1000)("test");

//throttle

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
