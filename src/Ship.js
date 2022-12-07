class Ship {
    constructor(length, x, y, timesHit = 0,floating = true) {
        this.length = length;
        this.x = x;
        this.y = y;
        this.timesHit = timesHit;
        this.floating = floating;
    }
    hit() {
        this.timesHit++
    }
    isSunk() {
        if (this.length==this.timesHit) {
            this.floating=false
        }
    }
}

export {Ship}