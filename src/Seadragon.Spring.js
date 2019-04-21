"use strict";
exports.__esModule = true;
//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
var Seadragon_Config_1 = require("./Seadragon.Config");
var Spring = /** @class */ (function () {
    function Spring(initialValue) {
        this.config = Seadragon_Config_1.getConfig();
        this.currentValue = typeof (initialValue) == "number" ? initialValue : 0;
        this.startValue = this.currentValue;
        this.targetValue = this.currentValue;
        this.currentTime = new Date().getTime(); // always work in milliseconds
        this.startTime = this.currentTime;
        this.targetTime = this.currentTime;
    }
    // Helpers
    /**
     * Transform from linear [0,1] to spring [0,1].
     */
    Spring.prototype.transform = function (x) {
        var s = this.config.springStiffness;
        return (1.0 - Math.exp(-x * s)) / (1.0 - Math.exp(-s));
    };
    // Methods
    Spring.prototype.getCurrent = function () {
        return this.currentValue;
    };
    Spring.prototype.getTarget = function () {
        return this.targetValue;
    };
    Spring.prototype.resetTo = function (target) {
        this.targetValue = target;
        this.targetTime = this.currentTime;
        this.startValue = this.targetValue;
        this.startTime = this.targetTime;
    };
    Spring.prototype.springTo = function (target) {
        this.startValue = this.currentValue;
        this.startTime = this.currentTime;
        this.targetValue = target;
        this.targetTime = this.startTime + 1000 * this.config.animationTime;
    };
    Spring.prototype.shiftBy = function (delta) {
        this.startValue += delta;
        this.targetValue += delta;
    };
    Spring.prototype.update = function () {
        this.currentTime = new Date().getTime();
        this.currentValue = (this.currentTime >= this.targetTime) ? this.targetValue :
            this.startValue + (this.targetValue - this.startValue) *
                this.transform((this.currentTime - this.startTime) / (this.targetTime - this.startTime));
    };
    return Spring;
}());
exports.Spring = Spring;
