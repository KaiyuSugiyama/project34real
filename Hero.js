class Hero {
    constructor(x,y,width,height) {
        var options = {
            density: 1,
            friction: 1,
            isStatic: false
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("images/Superhero-01.png");
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
        
}