//var oImgs = document.getElementById("imgs");
//var oImg = oImgs.getElementsByTagName("img");//图片数组

//#imgs img
var oImgs = document.getElementById("imgs").getElementsByTagName("img");
var oLis = document.getElementById("nav").getElementsByTagName("li");

var now = 0;//动态控制数组下标,完成图片切换

function play(){
    for(var i=0; i<oImgs.length; i++){
        oImgs[i].className = ""; //图片
        oLis[i].className = ""; //li
    }
    oImgs[now].className = "on";
    oLis[now].className = "on";
    
    now++;
    if(now == oImgs.length) now = 0;
}

setInterval(play, 1000);

