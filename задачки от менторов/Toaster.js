const MESSAGES = {
  powerChangeSuccess: "Power successfully changed",
  powerChangeError: "Power should be between 1 and 10!",
  breadInsertSuccess: "Bread successfully insert!",
  breadInsertError: "Bread already inside!",
  breadEjectSuccess: "Bread successfully ejected!",
  breadEjectError: "Bread not inside!",
  timeError: "Time should be between 90 and 1",
  timeBreadError: "Bread should be inside before start!",
  successToast: "Done!",
};

class Toaster {
  #power = 5;
  #totalPowerUse = 0;
  #currentPowerUse = 0;
  #breadInside = false;
  #initTime = 0;
  #timeLeft = 0;
  #timerId;

  setPower(power) {
    if (power > 1 && power < 10) {
      this.#power = power;
      return MESSAGES.powerChangeSuccess;
    } else {
      return MESSAGES.powerChangeError;
    }
  }

  insertBread() {
    if (!this.#breadInside) {
      this.#breadInside = true;
      this.#currentPowerUse = 0;
      return MESSAGES.breadInsertSuccess;
    } else {
      return MESSAGES.breadInsertError;
    }
  }

  ejectBread() {
    if (!this.#breadInside) {
      this.#breadInside = false;
      this.#currentPowerUse = 0;
      return MESSAGES.breadEjectSuccess;
    } else {
      return MESSAGES.breadEjectError;
    }
  }

  setTimeLeft(time) {
    if (time < 1 || time > 90) return MESSAGES.timeError;
    if (!this.#breadInside) return MESSAGES.timeBreadError;

    clearInterval(this.#timerId);
    this.#initTime = time;
    this.#timeLeft = time;
    this.#timerId = setInterval(() => {
      if (this.#timeLeft === 0) {
        clearInterval(this.#timerId);
        this.ejectBread();
        return MESSAGES.successToast;
      } else {
        this.#totalPowerUse = this.#power;
        this.#currentPowerUse = this.#power;
        this.#timeLeft--;
        return `Time left: ${this.#timeLeft}`;
      }
    }, time * 100);
  }

  logStat() {
    console.log(`
      Toaster info: 
      Power: ${this.#power}
      LoadingTime: ${this.#initTime} 
      Loading: ${!!this.#timerId}
      LoadingLeft: ${this.#timeLeft} 
      BreadInside: ${this.#breadInside}
      Current power use: ${this.#currentPowerUse}
    `);
  }

  logPower() {
    console.log(`
      Power info: 
      Total power use: ${this.#totalPowerUse}
      Current power use: ${this.#currentPowerUse}
    `);
  }
}

const toaster = new Toaster();
