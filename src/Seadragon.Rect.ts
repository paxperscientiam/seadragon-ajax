//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

import { Point } from "./Seadragon.Point"

export class Rect {
    public x: number
    public y: number
    public width: number
    public height: number

    constructor(x: number, y: number, width: number, height: number) {
        this.x = typeof(x) === "number" ? x : 0
        this.y = typeof(y) === "number" ? y : 0
        this.width = typeof(width) === "number" ? width : 0
        this.height = typeof(height) === "number" ? height : 0
    }

    getAspectRation() {
        return this.width / this.height
    }

    getTopLeft() {
        return new Point(this.x, this.y)
    }

    getBottomRight() {
        return new Point(this.x + this.width, this.y + this.height)
    }

    getCenter() {
        return new Point(this.x + this.width / 2.0,
                         this.y + this.height / 2.0)
    }

    getSize() {
        return new Point(this.width, this.height)
    }

    equals(other) {
        return (other instanceof Rect) &&
            (this.x === other.x) && (this.y === other.y) &&
            (this.width === other.width) && (this.height === other.height)
    }

    toString() {
        return `[${this.x}, ${this.y}, ${this.width} "x" ${this.height}]`
    }
}
