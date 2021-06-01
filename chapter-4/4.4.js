class Stopwatch {
    duration = 0;
    start = null;
    end = null;
    starttime() {
        this.start = new Date();
        console.log("started...");
    }
    stoptime() {
        this.end = new Date();
        console.log("stopped...");
    }
    reset() {
        this.start = null;
        this.end = null;
        console.log("reset...");
    }
    getDuration() {
        this.duration = this.end - this.start;
        console.log(`${new Date(this.duration).getSeconds()} seconds`);
    }
}

const s = new Stopwatch();