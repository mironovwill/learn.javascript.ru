const MESSAGES = {
    powerChangeSuccess: 'Power successfully changed',
    powerChangeError: 'Power should be between 1 and 10!',
    breadInsertSuccess: 'Bread successfully inserted!',
    breadInsertError: 'Bread already inside!',
    breadEjectSuccess: 'Bread successfully ejected!',
    breadEjectError: 'Bread is not inside!',
    timeError: 'Time should be between 1 and 90 seconds!',
    successToast: 'Done!',
    loading: 'Loading in process!',
}

interface IToaster {
    setTimeLeft(time: number): void
    ejectBread(): string
    insertBread(): string
    logStat(): void
    setPower(power: number): string
    logPower(): void
}

class Toaster implements IToaster {
    private power: number
    private breadInside: boolean
    private initTime: Date
    private endTime: number
    private loadingTime: number
    private timerID?: NodeJS.Timeout | null
    private totalPowerUse: number
    private currentPowerUse: number

    constructor() {
        this.power = 5
        this.breadInside = false
        this.initTime = new Date()
        this.endTime = 0
        this.loadingTime = 0
        this.timerID = null
        this.totalPowerUse = 0
        this.currentPowerUse = 0
    }

    setTimeLeft = (time: number): void => {
        if (time < 1 || time > 90) throw new Error(MESSAGES.timeError)

        if (this.timerID) {
            clearInterval(this.timerID)
        }

        this.loadingTime = time
        this.initTime = new Date()
        this.endTime = this.initTime.getTime() + time * 1000

        const timer = (): void => {
            const currentTime = Date.now()

            if (currentTime >= this.endTime) {
                if (this.timerID) {
                    clearInterval(this.timerID)
                    this.timerID = null
                }

                console.log(MESSAGES.successToast)
                this.ejectBread()
            } else {
                this.totalPowerUse += this.power
                this.currentPowerUse += this.power
                console.log(MESSAGES.loading)
            }
        }

        this.timerID = setInterval(timer, 1000)
    }

    ejectBread = (): string => {
        if (this.breadInside) {
            this.breadInside = false
            this.currentPowerUse = 0
            return MESSAGES.breadEjectSuccess
        }

        throw new Error(MESSAGES.breadEjectError)
    }

    insertBread = (): string => {
        if (this.breadInside) throw new Error(MESSAGES.breadInsertError)
        this.breadInside = true
        this.currentPowerUse = 0
        return MESSAGES.breadInsertSuccess
    }

    setPower = (power: number): string => {
        if (power < 1 || power > 10) throw new Error(MESSAGES.powerChangeError)

        this.power = power
        return MESSAGES.powerChangeSuccess
    }

    logStat = (): void => {
        console.log(`
      Toaster info: 
      Power: ${this.power}
      LoadingTime: ${this.loadingTime} 
      Loading: ${!!this.timerID}
      LoadingLeft: ${(this.endTime - Date.now()) / 1000} 
      BreadInside: ${this.breadInside}
      Current power use: ${this.currentPowerUse}
    `)
    }

    logPower = (): void => {
        console.log(`
      Power info: 
      Total power use: ${this.totalPowerUse}
      Current power use: ${this.currentPowerUse}
    `)
    }
}
