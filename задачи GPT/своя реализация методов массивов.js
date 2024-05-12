const array = [1, 2, 3, 4, 5];

Array.prototype.myPush = function (...elements) {
  elements.forEach(el => (this[this.length] = el));
  return this.length;
};

Array.prototype.myPop = function () {
  const lastElement = this[this.length - 1];
  this.length = this.length - 1;
  return lastElement;
};
