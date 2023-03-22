class Paddle {
    constructor(isLeft = false) {
        this.w = 20
        this.h = 125
        this.x = isLeft ? this.w : width - this.w;
        this.y = height / 2 - this.h / 2
        this.step = round(random()) * 2 - 1
        console.log(this.step)
    }
    draw() {
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h)
    }

    move(value){
        
        if (this.y - (this.h/2) <= 0 || this.y + (this.h /2) >= height )
            this.step = -this.step;
        this.y += this.step
    }

}