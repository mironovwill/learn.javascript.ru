//Вычислить сумму чисел до данного

// рекурсивный вариант
function sumTo(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(1)); // 1
console.log(sumTo(2)); // 3
console.log(sumTo(3)); // 6
console.log(sumTo(4)); // 10

// итеративный вариант
function sumToIterativeVersion(n) {
  if (n === 1) {
    return 1;
  } else {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }

    return sum;
  }
}

console.log(sumToIterativeVersion(1)); // 1
console.log(sumToIterativeVersion(2)); // 3
console.log(sumToIterativeVersion(3)); // 6
console.log(sumToIterativeVersion(4)); // 10

// Прогрессия
function sumToProgress(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToProgress(1)); // 1
console.log(sumToProgress(2)); // 3
console.log(sumToProgress(3)); // 6
console.log(sumToProgress(4)); // 10

//Вычислить факториал
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//Вычислить факториал
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

//Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

function printListTwo(list) {
  console.log(list.value);

  if (list.next) {
    printListTwo(list.next);
  }
}

printListTwo(list);

//Вывод односвязного списка в обратном порядке
function reverseList(list) {
  if (list.next) {
    reverseList(list.next);
  }

  console.log(list.value);
}

reverseList(list);

function reverseListTwo(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reverseListTwo(list);
