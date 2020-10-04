class Staticball{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 7.5, options);
        this.width = 15;
        this.height = 15;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(255,255,255);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}