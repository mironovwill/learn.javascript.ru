//setinterval

function printNumbers(from, to) {
  let currentValue = from;
  const intervalId = setInterval(() => {
    console.log(currentValue);
    if (currentValue === to) {
      clearInterval(intervalId);
    }
    currentValue++;
  }, 1000);
}

printNumbers(1, 10);

//recursion
function recursionPrintNumbers(from, to) {
  const currentValue = from;

  if (currentValue <= to) {
    console.log(currentValue);
    recursionPrintNumbers(currentValue + 1, to);
  }
}

recursionPrintNumbers(1, 10);

//recursion setTimeout
function recursionSetTimeoutPrintNumbers(from, to) {
  let currentValue = from;

  function go() {
    console.log(currentValue);
    if (currentValue == to) {
      clearInterval(timerId);
    }
    currentValue++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

recursionSetTimeoutPrintNumbers(1, 10);

//Что покажет setTimeout? - После цикла.
let i = 0;
setTimeout(() => alert(i), 100); // ?
for (let j = 0; j < 100000000; j++) {
  i++;
}
