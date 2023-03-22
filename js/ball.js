class Ball{
    constructor(){
        this.r = 10
        this.distancia = 0;
        this.reset()
    }
    draw(){
        ellipse(this.x,this.y,this.r * 2);
    }

    move(){
        this.x += this.stepX;
        this.y += this.stepY;
    }

    collide(player = new Paddle){
        // print("PADDLE X: " + player.x);
        // print("PADDLE Y: " + player.y);
        // print("BALL X: " + this.x);
        // print("BALL Y: " + this.y);
        // print("DISTANCE: " + this.distancia);
        // print("--------------------------------------------------------");
          
        this.distancia = sqrt((this.x - player.x) * (this.x - player.x) + (this.y - player.y) * (this.y - player.y));
        if(this.distancia < this.r){
            this.stepX = -this.stepX;
        }
    }

    edge(){
        if(this.y - this.r <= 0 || this.y + this.r >= height)
            this.stepY = -this.stepY;
        
        if(this.x - this.r <= 0 || this.x - this.r >= width)
            this.reset();
    }

    reset(){
        const SPEED = 4;
        this.stepX = SPEED * random([-1,1]);
        this.stepY = SPEED * random([-1,1]);
        this.x = width / 2 - this.r /2
        this.y = height / 2 - this.r / 2
    }
}