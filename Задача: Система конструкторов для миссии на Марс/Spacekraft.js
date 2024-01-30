const destinations = {
  mars: 60,
  moon: 30,
  jupiter: 70,
};

function Spacekraft(name, fuelType) {
  this.name = name;
  this.fuelType = fuelType;
  this.isInSpace = false;
  this.fuelLevel = 100;
  this.launch = function () {
    if (!this.isInSpace) {
      this.isInSpace = true;
      this.fuelLevel -= 10;
      return `${this.name} ready to go`;
    }
    return `${this.name} already in space`;
  };
  this.land = function (destination) {
    if (this.isInSpace) {
      if (destination in destinations) {
        this.fuelLevel -= destinations[destination];
        this.isInSpace = false;
        return `${this.name} landed on ${destination}`;
      }
      return `${this.name} cannot land on ${destination}`;
    }

    return `${this.name} not in space, launch a ship `;
  };
  this.checkFuel = function () {
    return `Current fuel level: ${this.fuelLevel}%`;
  };
  this.refuel = function (amount) {
    if (this.fuelLevel + amount > 100) {
      this.fuelLevel = 100;
      return this.checkFuel();
    }

    this.fuelLevel += amount;
    return this.checkFuel();
  };
}

module.exports = Spacekraft;
