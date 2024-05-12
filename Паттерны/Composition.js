class Bedroom {
  constructor(lights) {
    this.lights = lights;
  }
}

class Kitchen {
  constructor(chairs) {
    this.chairs = chairs;
  }
}

class MainRoom {
  constructor(poofs) {
    this.poofs = poofs;
  }

  get poofCount() {
    return this.poofs;
  }

  set poofCount(count) {
    this.poofs = count;
  }
}

class Home {
  constructor() {
    this.mainRoom = new MainRoom(1);
    this.kitchen = new Kitchen(4);
    this.bedroom = new Bedroom(2);
  }
}

const home = new Home();

console.log(home.mainRoom.poofCount);
home.mainRoom.poofCount = 10;
console.log(home.mainRoom.poofCount);
console.log(home.kitchen.chairs);
