class Engine {
    constructor(name) {
        this.name = name
    }

    start() {
        console.log(`${this.name} Engine start!`)
    }
}

class Car {
    constructor(engine) {
        this.engine = engine
    }

    startCar() {
        this.engine.start()
        console.log('Car is started!')
    }
}

const v8 = new Engine('v8')
const car = new Car(v8)

car.startCar()
