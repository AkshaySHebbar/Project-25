class Paper{
    constructor(x,y) {
var options ={

isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.rectangle(x,y,options);
this.width = width;
this.height = height;
World.add(world, this.body);
this.image = loadImage("paper.png");
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y);
  }
};



