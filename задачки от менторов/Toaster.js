const MESSAGES = {
  powerChangeSuccess: "Power successfully changed",
  powerChangeError: "Power should be between 1 and 10!",
  breadInsertSuccess: "Bread successfully insert!",
  breadInsertError: "Bread already inside!",
  breadEjectSuccess: "Bread successfully ejected!",
  breadEjectError: "Bread is not inside!",
  timeError: "Time should be between 90 and 1",
  successToast: "Done!",
  loading: "Loading in process!",
};

class Toaster {
  #power = 5;
  #breadInside = false;
  #initTime = 0;
  #endTime = 0;
  #loadingTime = 0;
  #timerID = null;
  #totalPowerUse = 0;
  #currentPowerUse = 0;

  setTimeLeft = time => {
    if (time < 0 || time > 90) throw new Error(MESSAGES.timeError);

    clearInterval(this.#timerID);
    this.#loadingTime = time;
    this.#initTime = new Date();
    this.#endTime = this.#initTime.setSeconds(
      this.#initTime.getSeconds() + time
    );

    const timer = () => {
      const currentTime = new Date().getTime();

      if (currentTime >= this.#endTime) {
        clearInterval(this.#timerID);
        console.log(MESSAGES.successToast);
        this.ejectBread();
      } else {
        this.#totalPowerUse += this.#power;
        this.#currentPowerUse += this.#power;
        console.log(MESSAGES.loading);
      }
    };

    this.#timerID = setInterval(timer, 1000);
  };

  setPower = power => {
    if (power < 1 || power > 10) throw new Error(MESSAGES.powerChangeError);

    this.#power = power;
    return MESSAGES.powerChangeSuccess;
  };

  insertBread = () => {
    if (this.#breadInside) throw new Error(MESSAGES.breadInsertError);
    this.#currentPowerUse = 0;
    this.#breadInside = true;

    return MESSAGES.breadInsertSuccess;
  };

  ejectBread = () => {
    if (this.#breadInside) {
      this.#breadInside = false;
      this.#currentPowerUse = 0;

      return MESSAGES.breadEjectSuccess;
    }

    throw new Error(MESSAGES.breadEjectError);
  };

  logStat = () => {
    console.log(`
      Toaster info: 
      Power: ${this.#power}
      LoadingTime: ${this.#loadingTime} 
      Loading: ${!!this.#timerID}
      LoadingLeft: ${(this.#endTime - new Date().getTime()) / 1000} 
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
