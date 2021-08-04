var car=[{name: 'Sonata', color: 'blue', speed:100},
{name:'Jeep', color:'red', speed:70},
{name:'Nexo', color: 'blue', speed:150}
]

for(var i=0; i<3; i++){
    var cname = document.getElementById("data1" + i);
    cname.textContent='자동차 이름: ' + car[i].name;
    var colname = document.getElementById("data2" + i);
    colname.textContent="자동차 색상: " + car[i].color;
    var cspeed = document.getElementById("data3" + i);
    cspeed.textContent='자동차 속도: ' + car[i].speed;
}