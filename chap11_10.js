var car = new Array(['Sonata', 'blue', 100], ['Jeep', 'red', 70], ['Nexo', 'blue', 150]);
var cname = document.getElementById("car");
cname.textContent="car[2][1]: " + car[2][1];
for(var i=0; i<3; i++){
    var cname=document.getElementById("car" + i);
    cname.textContent=car[i];
}