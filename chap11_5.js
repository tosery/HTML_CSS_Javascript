var car={
    name: 'Sonata',
    speed: 100,
    color: 'white',
    speedup: function(a){
        var sp = this.speed + a;
        if(sp>=300){
            sp=50;
            return sp;
        }
        else{
            return sp;
        }
    },
    speeddown: function(a){
        var sp=this.speed-a;
        if(sp<0){
            sp=0;
            return sp;
        }
        else{
            return sp;
        }
    }
};
var upspeed=document.getElementById("upspeed");
upspeed.textContent='속도 증가: ' + car.speedup(100);
var downspeed=document.getElementById("downspeed");
downspeed.textContent='속도 감소: ' + car.speeddown(30);