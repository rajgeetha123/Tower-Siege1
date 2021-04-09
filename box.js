class box{
    constructor(x,y,width,height){

        var options={
            isStatic:false
        }

        this.box=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
    }

    display(){
        var pos=this.box.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);
    }
}