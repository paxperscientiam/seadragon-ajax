"use strict";
//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = typeof (x) === "number" ? x : 0;
        this.y = typeof (y) === "number" ? y : 0;
    }
    Point.prototype.plus = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    Point.prototype.minus = function (point) {
        return new Point(this.x - point.x, this.y - point.y);
    };
    Point.prototype.times = function (factor) {
        return new Point(this.x * factor, this.y * factor);
    };
    Point.prototype.divide = function (factor) {
        return new Point(this.x / factor, this.y / factor);
    };
    Point.prototype.negate = function () {
        return new Point(-this.x, -this.y);
    };
    Point.prototype.distanceTo = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
            Math.pow(this.y - point.y, 2));
    };
    Point.prototype.apply = function (func) {
        return new Point(func(this.x), func(this.y));
    };
    Point.prototype.equals = function (point) {
        return (point instanceof Point) &&
            (this.x === point.x) && (this.y === point.y);
    };
    Point.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    return Point;
}());
exports.Point = Point;
