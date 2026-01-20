class AlarmClock {
    alarmCollection = [];
    intervalId = null;
    addClock(timeParam = null,param = null) {
        if (timeParam===null || param ===null) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.find(alarm => alarm.time === timeParam)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({ callback: param, time: timeParam, canCall: true });

    }
    removeClock(timeToRemove) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== timeToRemove);
    }
    getCurrentFormattedTime() {
        const date = new Date;
        return String(date.getHours()).padStart(2, "0") + ":"
            + String(date.getMinutes()).padStart(2, "0");
    }
    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                const currentTime = this.getCurrentFormattedTime();

                if (alarm.time === currentTime && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval();
        this.intervalId = null;
    }
    resetAllCalls(){
        for(let alarm of this.alarmCollection){
            alarm.canCall = true;
        }
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }


}