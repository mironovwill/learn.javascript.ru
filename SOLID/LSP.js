class Character {
    constructor(name, age, health, type) {
        this.name = name
        this.age = age
        this.health = health
        this.type = type
    }

    move = () => {
        console.log(`The ${this.name} is moving!`)
    }

    attack = () => {
        console.log(`The ${this.name} is attacking!`)
    }

    healthStatus = () => {
        console.log(this.health)
    }

    showType = () => {
        console.log(this.type)
    }
}

class Knight extends Character {
    constructor(name, age, health, type) {
        super(name, age, health, type)
    }

    //здесь не идет нарушение LSP так как контекст остается тот же (производится атака)
    attack = () => {
        console.log(`The ${this.name} attacks with a sword!`)
    }
}

class Wizard extends Character {
    constructor(name, age, health, type) {
        super(name, age, health, type)
    }

    //здесь не идет нарушение LSP так как мы просто расширили класс
    doMagic = () => {
        console.log(`The ${this.name} begins to conjure!`)
    }

    //здесь мы уже нарушаем LSP так как мы переписали атаку на прыжок
    attack = () => {
        console.log(`${this.name} jumps!`)
    }
}
