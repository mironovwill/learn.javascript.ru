// Работа с прототипами
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true так как сначала будет поиск по внутренним св-вам
delete rabbit.jumps;
console.log(rabbit.jumps); // null так как пойдем вниз до прототипа
delete animal.jumps;
console.log(rabbit.jumps); // undefined так как свойство родителя было удалено

//Алгоритм поиска
let head = {
    glasses: 1
};
let table = {
    pen: 3
};
let bed = {
    sheet: 1,
    pillow: 2
};
let pockets = {
    money: 2000
};

table.__proto__ = head
bed.__proto__ = table
pockets.__proto__ = bed

console.log(pockets.pen)
console.log(bed.glasses)

//Почему наедаются оба хомяка?

let hamster = {
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);