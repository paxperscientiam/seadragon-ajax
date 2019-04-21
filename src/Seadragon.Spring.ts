//  This code is distributed under the included license agreement, also
//  available here: http://go.microsoft.com/fwlink/?LinkId=164943
import { getConfig } from "./Seadragon.Config"

export class Spring {
    public currentValue: number
    public startValue: number
    public targetValue: number
    public currentTime: number
    public startTime: number
    public targetTime: number
    public config = getConfig()

    constructor (initialValue: number) {
        this.currentValue = typeof(initialValue) == "number" ? initialValue : 0
        this.startValue = this.currentValue
        this.targetValue = this.currentValue

        this.currentTime = new Date().getTime() // always work in milliseconds
        this.startTime = this.currentTime
        this.targetTime = this.currentTime
    }
    // Helpers

    /**
     * Transform from linear [0,1] to spring [0,1].
     */
    transform(x: number) {
        const s = this.config.springStiffness
        return (1.0 - Math.exp(-x * s)) / (1.0 - Math.exp(-s))
    }

    // Methods
    getCurrent() {
        return this.currentValue
    }

    getTarget() {
        return this.targetValue
    }

    resetTo(target: number) {
        this.targetValue = target
        this.targetTime = this.currentTime
        this.startValue = this.targetValue
        this.startTime = this.targetTime
    }

    springTo(target: number) {
        this.startValue = this.currentValue
        this.startTime = this.currentTime
        this.targetValue = target
        this.targetTime = this.startTime + 1000 * this.config.animationTime
    }

    shiftBy(delta: number) {
        this.startValue += delta
        this.targetValue += delta
    }

    update() {
        this.currentTime = new Date().getTime()
        this.currentValue = (this.currentTime >= this.targetTime) ? this.targetValue :
            this.startValue + (this.targetValue - this.startValue) *
            this.transform((this.currentTime - this.startTime) / (this.targetTime - this.startTime))
    }

}
