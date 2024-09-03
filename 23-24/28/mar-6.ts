class Timer {
    time: number;
    interval: number;
    paused: boolean;
    lastMs: number;
    callback: () => void;
    constructor(ms: number, callback: () => void) {
        this.time = ms;
        this.callback = callback;
    }
    start() {
        this.lastMs = Date.now();
        this.interval = setInterval(() => {
            if (this.paused) return;
            this.time -= this.lastMs == 0 ? 1 : Date.now() - this.lastMs;
            this.lastMs = Date.now();
            if (this.time <= 0) {
                this.callback();
                this.end();
            }
        }, 1);
    }
    end() {
        clearInterval(this.interval);
        this.time = 0;
    }
    pause() {
        this.lastMs = 0;
        this.paused = true;
    }
    resume() {
        this.paused = false;
    }
    getTimeRemaining() {
        return this.time;
    }
}

const assert = (expr: boolean) => {
    if (!expr) throw "failed assertion";
};
const wait = (ms: number) =>
    new Promise((res) => setTimeout(() => res(null), ms));

const timer = new Timer(500, () => console.log("Hello world"));
timer.start();
timer.pause();
timer.resume();
console.log(timer.getTimeRemaining());
await wait(100);
console.log(timer.getTimeRemaining());
await wait(400);
console.log(timer.getTimeRemaining());
timer.end();
export {};
