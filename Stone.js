class Stone {
constructor (x,y){

    var options = {
        isSttic:false,
        restitution:0,
        friction:1,
        density:1.0,    
    }
    this.body = Bodies.rectangle(x,y,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    World.add(world,this.stone);
    this.stone = Constraint.create(options);
}
display(){
 this.stone = mouseX; 


}
}