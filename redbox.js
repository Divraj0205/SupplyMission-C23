class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0,
            'density':0.8,
            'friction':0.3
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        rectMode(CENTER);
        fill(225,0,0);
        rect(position.x,position.y,this.width,this.height);
        //pop();
        //console.log(pop());
    }
}