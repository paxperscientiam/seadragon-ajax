//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943

export class Point {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = typeof(x) === "number" ? x : 0
        this.y = typeof(y) === "number" ? y : 0
    }

    plus(point) {
        return new Point(this.x + point.x, this.y + point.y)
    }

    minus(point) {
        return new Point(this.x - point.x, this.y - point.y)
    }

    times(factor) {
        return new Point(this.x * factor, this.y * factor)
    }

    divide(factor) {
        return new Point(this.x / factor, this.y / factor)
    }

    negate() {
        return new Point(-this.x, -this.y)
    }

    distanceTo(point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
                         Math.pow(this.y - point.y, 2))
    }

    apply(func) {
        return new Point(func(this.x), func(this.y))
    }

    equals(point) {
        return (point instanceof Point) &&
            (this.x === point.x) && (this.y === point.y)
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}
