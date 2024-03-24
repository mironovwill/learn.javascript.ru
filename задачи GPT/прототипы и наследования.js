/*
Создание прототипа объекта:
Создайте объект Animal с методом makeSound(), который выводит звук, издаваемый животным. Затем создайте объект Dog,
который наследует от Animal и переопределите метод makeSound() для вывода звука, издаваемого собакой.
*/

const animal = {
    makeSound: () => console.log("I'm animal!")
}

const dog = {}

dog.__proto__ = animal

dog.makeSound = () => console.log("I'm a dog!")

/*
Изменение прототипа объекта:
Создайте объект Person с полями name и age. Добавьте метод greet(), который выводит приветствие с именем и возрастом. Затем создайте объект Student,
который наследует от Person и добавьте поле major. Переопределите метод greet(), чтобы он также включал специфичное для студента приветствие.
*/

const Person = {
    name: "Daniel",
    age: 21,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and i'm ${this.age}`)
    }
}

const Student = Object.create(Person)
Student.major = "Programmer"

Student.greet = function () {
    Person.greet.call(this)
    console.log(`My major is - ${this.major}`)
}

/*
Использование Object.create():
Используя Object.create(), создайте объект Shape с методом draw(),
который выводит информацию о фигуре. Затем создайте объекты Circle и Rectangle,
которые наследуют от Shape и переопределите метод draw() для соответствующего вывода информации о круге и прямоугольнике.
*/

const Shape = Object.create({}, {
    x: {
        value: 0,
        writable: true,
        configurable: true,
        enumerable: true
    },
    y: {
        value: 0,
        writable: true,
        configurable: true,
        enumerable: true
    },
    draw: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function () {
            console.log(`Shape param: x = ${this.x}, y = ${this.y}`)
        }
    }
})

const Circle = Object.create(Shape, {
    x: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    },
    y: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    },
    draw: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function () {
            console.log(`Circle param: x = ${this.x}, y = ${this.y}`)
        }
    }
})

const Rectangle = Object.create(Shape, {
    x: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true
    },
    y: {
        value: 50,
        writable: true,
        configurable: true,
        enumerable: true
    },
    draw: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function () {
            console.log(`Rectangle param: x = ${this.x}, y = ${this.y}`)
        }
    }
})

/*
Прототипное наследование с использованием классов:
Создайте класс Vehicle с методом drive(), который выводит сообщение о том, что транспортное средство движется.
Затем создайте класс Car, который наследует от Vehicle и добавьте метод honk(), который выводит звук клаксона.
*/

class Vehicle {
    drive() {
        console.log("Транспортное средство движется")
    }
}

class Car extends Vehicle {
    honk() {
        console.log("Бип")
    }
}

const bmw = new Car()

/*
Комбинированное наследование:
Создайте объект Device с методом turnOn(), который выводит сообщение о включении устройства. Создайте объект Phone,
который наследует от Device и добавляет метод call(), который выводит сообщение о звонке.
Затем создайте объект Smartphone, который наследует от Phone и добавляет метод browseInternet(),
который выводит сообщение о просмотре интернета.
*/
const Device = {
    turnOn() {
        console.log("Устройство включено!")
    }
}

const Phone = Object.create(Device, {
    call: {
        writable: true,
        configurable: true,
        value: function () {
            console.log("Новый звонок!")
        }
    }
})

const SmartPhone = Object.create(Phone, {
    browseInternet: {
        writable: true,
        configurable: true,
        value: function () {
            console.log("Браузер открыт!")
        }
    }
})

SmartPhone.turnOn()
SmartPhone.call()
SmartPhone.browseInternet()

/*
Множественное наследование:
Создайте объект Bird с методом fly(), который выводит сообщение о полете.
Создайте объект Fish с методом swim(), который выводит сообщение о плавании.
Затем создайте объект Duck, который наследует от Bird и Fish, и используйте его для реализации методов fly() и swim().
*/

const Bird = {
    fly() {
        console.log("Взлет!")
    },
}

const Fish = {
    swim() {
        console.log("Плывем!")
    },
}

const Duck = Object.assign({}, Bird, Fish)

Duck.fly()
Duck.swim()

/*
Передача параметров при наследовании:
Создайте класс Animal с полем species. Затем создайте класс Dog, который наследует от Animal и принимает дополнительный параметр breed.
Переопределите конструктор класса Dog, чтобы он передавал species и breed в родительский конструктор.
*/

class Animal {
    constructor(species) {
        this.species = species
    }
}

class Dog extends Animal {
    constructor(species, breed) {
        super(species)
        this.breed = breed
    }
}

const chiwawa = new Dog("small", "chiwawa")

console.log(chiwawa)


/*
Использование прототипов для расширения встроенных объектов:
Расширьте функциональность встроенного объекта Array, добавив метод last(), который возвращает последний элемент массива.
*/

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
}

console.log([1, 2, 3, 4, 5].last())


/*
Использование прототипов для расширения объектов:
Создайте функцию-конструктор Counter, которая создает объект счетчика с методами increment() и getValue().
Расширьте прототип Counter, добавив метод decrement(), который уменьшает значение счетчика на единицу.
*/


function Counter() {
    this.counter = 0;
    this.increment = function () {
        this.counter++
    }
    this.getValue = function () {
        console.log(this.counter)
    }
}

const counter = new Counter()

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.getValue()

counter.decrement = function () {
    this.counter--
}

counter.decrement()
counter.getValue()

