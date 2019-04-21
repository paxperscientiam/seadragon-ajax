"use strict";
//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
exports.__esModule = true;
var Seadragon_Point_1 = require("./Seadragon.Point");
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = typeof (x) === "number" ? x : 0;
        this.y = typeof (y) === "number" ? y : 0;
        this.width = typeof (width) === "number" ? width : 0;
        this.height = typeof (height) === "number" ? height : 0;
    }
    Rect.prototype.getAspectRation = function () {
        return this.width / this.height;
    };
    Rect.prototype.getTopLeft = function () {
        return new Seadragon_Point_1.Point(this.x, this.y);
    };
    Rect.prototype.getBottomRight = function () {
        return new Seadragon_Point_1.Point(this.x + this.width, this.y + this.height);
    };
    Rect.prototype.getCenter = function () {
        return new Seadragon_Point_1.Point(this.x + this.width / 2.0, this.y + this.height / 2.0);
    };
    Rect.prototype.getSize = function () {
        return new Seadragon_Point_1.Point(this.width, this.height);
    };
    Rect.prototype.equals = function (other) {
        return (other instanceof Rect) &&
            (this.x === other.x) && (this.y === other.y) &&
            (this.width === other.width) && (this.height === other.height);
    };
    Rect.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + ", " + this.width + " \"x\" " + this.height + "]";
    };
    return Rect;
}());
exports.Rect = Rect;
