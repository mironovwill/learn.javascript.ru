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
  loading: "Loading in process!",
};

class Toaster {
  #power = 5;
  #totalPowerUse = 0;
  #currentPowerUse = 0;
  #breadInside = false;
  #initTime = 0;
  #timeLeft = 0;
  #timerId = null;

  setTimeLeft = time => {
    if (time < 1 || time > 90) return MESSAGES.timeError;
    if (!this.#breadInside) return MESSAGES.timeBreadError;

    clearInterval(this.#timerId);

    this.#initTime = new Date();
    this.#timeLeft = this.#initTime.setSeconds(
      this.#initTime.getSeconds() + time
    );

    const timer = () => {
      const currentTime = new Date();

      if (currentTime >= this.#timeLeft) {
        clearInterval(this.#timerId);
        console.log(MESSAGES.successToast);
        this.ejectBread();
      } else {
        this.#totalPowerUse += this.#power;
        this.#currentPowerUse += this.#power;
        console.log(MESSAGES.loading);
      }
    };

    this.#timerId = setInterval(timer, 1000);
  };

  setPower = power => {
    if (power > 1 && power < 10) {
      this.#power = power;
      console.log(MESSAGES.powerChangeSuccess);
    } else {
      console.log(MESSAGES.powerChangeError);
    }
  };

  insertBread = () => {
    if (!this.#breadInside) {
      this.#breadInside = true;
      this.#currentPowerUse = 0;
      console.log(MESSAGES.breadInsertSuccess);
    } else {
      console.log(MESSAGES.breadInsertError);
    }
  };

  ejectBread = () => {
    if (this.#breadInside) {
      this.#breadInside = false;
      this.#currentPowerUse = 0;
      console.log(MESSAGES.breadEjectSuccess);
    } else {
      console.log(MESSAGES.breadEjectError);
    }
  };

  logStat = () => {
    console.log(`
      Toaster info: 
      Power: ${this.#power}
      LoadingTime: ${this.#initTime} 
      Loading: ${!!this.#timerId}
      LoadingLeft: ${this.#timeLeft} 
      BreadInside: ${this.#breadInside}
      Current power use: ${this.#currentPowerUse}
    `);
  };

  logPower = () => {
    console.log(`
      Power info: 
      Total power use: ${this.#totalPowerUse}
      Current power use: ${this.#currentPowerUse}
    `);
  };
}

const toaster = new Toaster();

toaster.insertBread();
toaster.logPower();
toaster.setTimeLeft(10);
setTimeout(() => {
  toaster.setTimeLeft(20);
  toaster.logPower();
  toaster.logStat();
}, 5000);
