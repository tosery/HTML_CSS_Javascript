function Car(name, color, speed){
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.speedup = function(){
        return this.speed+10;
    };
    this.speeddown = function(){
        return this.speed-10;
    };
}
//여기서 객체를 생성
var Hongcar = new Car('Sonata', 'blue', 100);
var Kimcar = new Car('Jeep', 'red', 70);

var cname = document.getElementById("carname");
cname.textContent='자동차 이름: ' + Hongcar.name;
var colname=document.getElementById("carcolor");
colname.textContent='자동차 색상: ' + Hongcar.color;
var cspeed = document.getElementById("carspeed");
cspeed.textContent = '자동차 속도' + Hongcar.speedup();

var cname = document.getElementById("carname2");
cname.textContent='자동차 이름: ' + Kimcar.name;
var colname=document.getElementById("carcolor2");
colname.textContent='자동차 색상: ' + Kimcar.color;
var cspeed = document.getElementById("carspeed2");
cspeed.textContent = '자동차 속도' + Kimcar.speedup();