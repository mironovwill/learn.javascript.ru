//Создайте новый объект с помощью уже существующего
function User(){
    this.name = "Daniel"
    this.age = 21
}

const obj =  new User()

let obj2 = new obj.constructor();