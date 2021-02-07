class Block
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.width = width;
this.height = height;
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);



}
display()
{


    
    var blockpos=this.body.position;

    push()
    translate(blockpos.x, blockpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    fill("darkgray")
    rect(0,0,this.width, this.height);
    pop()
    
    }


}