"use strict";
//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
exports.__esModule = true;
var Profiler = /** @class */ (function () {
    function Profiler() {
        // Fields
        this.midUpdate = false;
        this.lastBeginTime = null;
        this.lastEndTime = null;
        this.minUpdateTime = Infinity;
        this.avgUpdateTime = 0;
        this.maxUpdateTime = 0;
        this.minIdleTime = Infinity;
        this.avgIdleTime = 0;
        this.maxIdleTime = 0;
    }
    // Methods -- UPDATE TIME ACCESSORS
    Profiler.prototype.getAvgUpdateTime = function () {
        return this.avgUpdateTime;
    };
    Profiler.prototype.getMinUpdateTime = function () {
        return this.minUpdateTime;
    };
    ;
    Profiler.prototype.getMaxUpdateTime = function () {
        return this.maxUpdateTime;
    };
    ;
    // Methods -- IDLING TIME ACCESSORS
    Profiler.prototype.getAvgIdleTime = function () {
        return this.avgIdleTime;
    };
    ;
    Profiler.prototype.getMinIdleTime = function () {
        return this.minIdleTime;
    };
    ;
    Profiler.prototype.getMaxIdleTime = function () {
        return this.maxIdleTime;
    };
    ;
    // Methods -- GENERAL ACCESSORS
    Profiler.prototype.isMidUpdate = function () {
        return this.midUpdate;
    };
    ;
    Profiler.prototype.getNumUpdates = function () {
        return this.numUpdates;
    };
    ;
    // Methods -- MODIFIERS
    Profiler.prototype.beginUpdate = function () {
        if (midUpdate) {
            self.endUpdate();
        }
        midUpdate = true;
        lastBeginTime = new Date().getTime();
        if (numUpdates < 1) {
            return; // this is the first update
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
    ;
    Profiler.prototype.endUpdate = function () {
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
    ;
    Profiler.prototype.clearProfile = function () {
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
    ;
    return Profiler;
}());
exports.Profiler = Profiler;
;
