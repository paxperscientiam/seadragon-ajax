//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

export interface Profiler {
    getAvgUpdateTime(): number
    getMinUpdateTime(): number
    getMaxUpdateTime(): number
    getAvgIdleTime(): number
    getMinIdleTime(): number
    getMaxIdleTime(): number

    isMidUpdate(): boolean
    getNumUpdates(): number

    beginUpdate(): void
}



export class Profiler {
    // Fields
    const midUpdate: boolean false
    const lastBeginTime = null
    const lastEndTime = null

    const minUpdateTime = Infinity;
    const avgUpdateTime: number = 0;
    const maxUpdateTime: number = 0;

    const minIdleTime = Infinity;
    const avgIdleTime: number = 0;
    const maxIdleTime: number = 0;


    constructor(               ) {

    }

    // Methods -- UPDATE TIME ACCESSORS

    getAvgUpdateTime() {
        return this.avgUpdateTime
    }

    getMinUpdateTime() {
        return this.minUpdateTime
    };

    getMaxUpdateTime() {
        return this.maxUpdateTime;
    };

    // Methods -- IDLING TIME ACCESSORS

    getAvgIdleTime() {
        return this.avgIdleTime;
    };

    getMinIdleTime() {
        return this.minIdleTime;
    };

    getMaxIdleTime() {
        return this.maxIdleTime;
    };

    // Methods -- GENERAL ACCESSORS

    isMidUpdate() {
        return this.midUpdate;
    };

    getNumUpdates() {
        return this.numUpdates;
    };

    // Methods -- MODIFIERS

    beginUpdate() {
        if (midUpdate) {
            self.endUpdate();
        }

        midUpdate = true;
        lastBeginTime = new Date().getTime();

        if (numUpdates <1) {
            return;     // this is the first update
        }

        var time = lastBeginTime - lastEndTime;

        avgIdleTime = (avgIdleTime * (numUpdates - 1) + time) / numUpdates;

        if (time < minIdleTime) {
            minIdleTime = time;
        }
        if (time > maxIdleTime) {
            maxIdleTime = time;
        }
    };

    endUpdate() {
        if (!midUpdate) {
            return;
        }

        lastEndTime = new Date().getTime();
        midUpdate = false;

        var time = lastEndTime - lastBeginTime;

        numUpdates++;
        avgUpdateTime = (avgUpdateTime * (numUpdates - 1) + time) / numUpdates;

        if (time < minUpdateTime) {
            minUpdateTime = time;
        }
        if (time > maxUpdateTime) {
            maxUpdateTime = time;
        }
    };

    clearProfile() {
        midUpdate = false;
        numUpdates = 0;

        lastBeginTime = null;
        lastEndTime = null;

        minUpdateTime = Infinity;
        avgUpdateTime = 0;
        maxUpdateTime = 0;

        minIdleTime = Infinity;
        avgIdleTime = 0;
        maxIdleTime = 0;
    };
};
