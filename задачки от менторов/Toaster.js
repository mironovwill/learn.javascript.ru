class Toaster {
  constructor() {
    this.power = 5;
    this.bread = false;
    this.warmTime = 0;
    this.status = false;
    this.totalTime = setInterval(() => this.warmTime-- * 1000, this.warmTime);
  }

  toggleToasterStatus() {
    this.status = !this.status;

    if (this.status) {
      console.log("Тостер включен");
    } else {
      console.log("Тостер выключен");
    }
  }

  insertBread() {
    if (this.bread) {
      console.log("Хлеб уже в тостере");
    } else {
      this.bread = true;
      console.log("Хлеб успешно вставлен в тостер");
    }
  }

  ejectBread() {
    if (this.bread) {
      this.bread = false;
      console.log("Хлеб успешно вынут из тостера");
    } else {
      console.log("Хлеба нет в тостере");
    }
  }

  setPower(numberOfPower) {
    if (numberOfPower < 1 || numberOfPower > 10)
      console.log("Мощность должна быть от 1 до 10");

    this.power = numberOfPower;
    console.log(`Мощность установлена на значении ${this.power}`);
  }

  logStat() {
    const stats = {
      Мощность: this.power,
      "Хлеб внутри": this.bread,
      "Время нагрева": this.warmTime,
      Включен: this.status,
    };

    console.table(stats);
    console.log(`Время работы: ${this.totalTime}`);
  }

  setTimeLeft(timeOfWarm) {
    if (timeOfWarm < 0 || timeOfWarm > 10) {
      return console.log("Время нагрева должно быть от 0 до 10");
    } else {
      this.warmTime = timeOfWarm;
      console.log(`Время нагрева установлено на значении ${this.warmTime}`);
    }

    if (!this.bread) return console.log("Хлеба нет в тостере");

    this.toggleToasterStatus();

    setTimeout(() => {
      this.ejectBread();
      this.toggleToasterStatus();
    }, this.warmTime * 1000);
  }
}

const toaster = new Toaster();

toaster.insertBread();
toaster.insertBread();
toaster.ejectBread();
toaster.ejectBread();
toaster.setPower(10);
console.log("--------");
toaster.setTimeLeft(5);
console.log("--------");
toaster.insertBread();
toaster.setTimeLeft(90);
toaster.logStat();
