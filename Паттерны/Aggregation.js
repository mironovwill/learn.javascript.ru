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
  constructor(mainRoom, kitchen, bedroom) {
    this.mainRoom = mainRoom;
    this.kitchen = kitchen;
    this.bedroom = bedroom;
  }
}

const home = new Home(new MainRoom(4), new Kitchen(4), new Bedroom(4));

console.log(home.mainRoom.poofCount);
home.mainRoom.poofCount = 10;
console.log(home.mainRoom.poofCount);
