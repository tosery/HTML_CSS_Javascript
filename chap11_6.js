var car = new Object();
car.name='Sonata';
car.speed = 100;
car.color='blue';
car.speedup=function(){
    return this.speed + 10;
};
var cname = document.getElementById("carname");
cname.textContent='자동차 이름 : ' + car.name;
var colname = document.getElementById("carcolor");
colname.textContent='자동차 색상 : ' + car.color;
var cspeed = document.getElementById("carspeed");
cspeed.textContent='자동차 속도 : ' + car.speedup();