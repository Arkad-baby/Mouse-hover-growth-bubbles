let  canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c=canvas.getContext("2d");

let maxRadius=60;
var mouse={
    x:undefined,
    y:undefined
} 
colorArray=["#4DBFEB","#51F2F5","#54DEB9","#51F59B","#4DEB68"] 


  window.addEventListener("mousemove",(e)=>{
     mouse.x=e.x;
     mouse.y=e.y;
     console.log("abc");
})

window.addEventListener("resize",function(){
  canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
init();
} )

  function bubble(x,y,radius,dx,dy){
           this.x=x;
        this.y=y;
        this.r=radius;
        this.dx=dx;
        this.dy=dy; 
        this.minRadius=radius;
        this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
        this.doWork=function(){
          c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2);
          c.fillStyle=this.color;
         c.fill();
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x+this.r>=window.innerWidth || this.x<=this.r){
            this.dx=-this.dx;
        }
        if(this.y+this.r>=window.innerHeight || this.y<=this.r){
            this.dy=-this.dy;
        } 
        
        if(mouse.x-this.x<=50 && mouse.x-this.x>=-50
            && mouse.y-this.y<=50 && mouse.y-this.y>=-50){
            if(this.r<=maxRadius){
            this.r+=4;
            }
        }
               else if(this.r>this.minRadius){
                this.r-=1;
                }
            }

    }


bubbleArray=[];

function init(){
  bubbleArray=[];
for(i=0;i<800;i++){
  var x=Math.random()*(window.innerWidth-50);
  var y=Math.random()*(window.innerHeight-50);
  let radius=Math.random()*3 + 1;
  if(x<radius){
      x+=radius
  }
  if(y<radius){
    y+=radius
  }

  var dx=2*parseInt(Math.pow(-1,Math.floor(Math.random()*10)));
  var dy=2*parseInt(Math.pow(-1,Math.floor(Math.random()*10)));
  bubbleArray.push(new bubble(x,y,radius,dx,dy));
}
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    for(i=0;i<bubbleArray.length;i++){
bubbleArray[i].doWork();
    }
}
animate();
init();


