class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body.Bodies.Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        rect(this.body,this.width,this.height)


    }
}