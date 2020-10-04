class bob
{
    constructor(x,y,r)
    {
        var options={
            isStatic:fasle
            restitution:1,
            friction:0,
            density:0.8

        }
        this.x=x;
        this.y=y;
        this.r=r;
           this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(World,this.body); 
    }
    display()
    {
        var paperPos=this.body.postition;
        push()
            translate(paperPos.x,paperPos.y);
            rectMode(CENTER)
            //strokeWeight(4);
        fill(255,0,255)
        //imageMode(CENTER);
        //image(this.image,0,0,this.r,this.r)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}