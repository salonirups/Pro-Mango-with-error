class Tree{
    constructor(x,y,width,height){
        var options={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        this.image=loadImage("tree.png");
        World.add(world,this.body)
    }
    display(){
        rect(x,y,width,height)
    }
}