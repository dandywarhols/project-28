class Paper{
  constructor(x, y,radius) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      
      this.image = loadImage("paper.png")
      this.radius = radius;
      World.add(world, this.body);
    } 
    display(){
      var angle = this.body.angle;
      push();
    
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      fill("green");
      image( this.image,0, 0,this.radius,this.radius );
      pop();
     
    }
}