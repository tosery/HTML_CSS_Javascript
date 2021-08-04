function Car(name, color, speed){
    this.name=name;
    this.color=color;
    this.speed=speed;
    this.speedup=function(){
        return this.speed+10;
    };
    this.speeddown=function(){
        return this.speed-10;
    };
}
var Hongcar=new Car('Sonata', 'blue', 100);
var Mycar = new Car('Nexo', 'blue', 160);
Mycar.price='7600만 원';
delete Mycar.color;

var cname=document.getElementById("hong1");
cname.textContent='자동차 이름: ' + Hongcar.name;
var colname=document.getElementById("hong2");
colname.textContent='자동차 색상: ' + Hongcar.color;
var cspeed=document.getElementById("hong3");
cspeed.textContent='자동차 속도: ' + Hongcar.speedup();

var cname=document.getElementById("data1");
cname.textContent='자동차 이름: ' + Mycar.name;
var colname=document.getElementById("data2");
colname.textContent='자동차 색상: ' + Mycar.color;
var cspeed=document.getElementById("data3");
cspeed.textContent='자동차 가격: ' + Mycar.price;