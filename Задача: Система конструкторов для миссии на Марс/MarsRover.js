function MarsRover(model, navigationSystem) {
  this.model = model;
  this.navigationSystem = navigationSystem;
  this.dataCollected = [];
  this.move = function (direction) {
    return `${this.model} двигается в направлении: ${direction}`;
  };
  this.collectData = function (dataType) {
    return this.dataCollected.push(dataType);
  };
  this.sendDataToEarth = function () {
    return `${this.model} отправляет на землю: ${this.dataCollected}`;
    this.dataCollected = [];
  };
}

module.exports = MarsRover;
