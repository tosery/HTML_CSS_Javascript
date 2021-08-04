var obj={
    m1: function(){
        return "Hello Sonata";
    },
    m2: function(a){
        var result=a;
        return result;
    },
    m3: function(a,b){
        var result=a+b;
        return result;
    }
};
document.getElementById("msg1").innerHTML=obj.m1();
document.getElementById("msg2").innerHTML=obj.m2(100);
document.getElementById("msg3").innerHTML=obj.m3(100,200);