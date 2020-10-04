class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':100000.0
        }
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.body = Bodies.circle(x, y, 6.5, options);
        this.width = 13;
        this.height = 13;
        World.add(world, this.body);
      }
      display(){
        push();
        fill(this.color);
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}