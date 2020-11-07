class Paper {
constructor(x,y,radius){
var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    dencity:1.2
}
this.body = Bodies.circle(x,y,50,50,options);
this.width=50;
this.height = 50;
this.radius=25;

World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var radius = this.body.radius;
Push();
translate(pos.x.pos.y);
rotate(radius);
circleMode(CENTER);

fill("pink");
circle(0,0,this.width,this.height);
pop();s
}
}