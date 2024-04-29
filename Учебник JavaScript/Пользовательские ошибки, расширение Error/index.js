class FormatError extends SyntaxError {
  constructor(stack) {
    super(stack);
    this.name = "FormatError";
    this.message = "Ошибка форматирования";
  }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
