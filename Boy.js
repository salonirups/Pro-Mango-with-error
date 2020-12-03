class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body.Bodies.Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        image(this.image,0,0,this.width,this.height);

    }
}