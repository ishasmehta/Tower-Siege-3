class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 1;
      this.width = width;
      this.height = height;
    }
    display(){
        var c;
        var angle = this.body.angle;
        if(this.body.velocity.y < 3 && this.body.position.y < 370){
          var c = color('rgba(0,0,255,'+this.Visibility+')');
          fill(c);
          super.display();  
        }
        else{
          World.remove(world,this.body);
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          this.Visibility = this.Visibility - 0.05;
          if(this.Visibility > 0){
            c = color('rgba(0,0,255,'+this.Visibility+')');
            fill(c);
            rect(0, 0, this.width, this.height);
          }
          pop();
        }  
    }
    score(){
      if(this.Visibility < 0 && this.Visibility > -1){
        score++;
      }
    }
  };