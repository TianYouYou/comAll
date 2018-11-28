//var oImgs = document.getElementById("imgs");
//var oImg = oImgs.getElementsByTagName("img");//图片数组

var container=document.getElementById("container");
//#imgs img
var oImgs = document.getElementById("imgs").getElementsByTagName("img");
var oLis = document.getElementById("nav").getElementsByTagName("li");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");

var now = 0;//动态控制(图片/li)数组下标,完成图片切换
var timer = null;

//鼠标经过li按钮组时 切换图片
for(var i=0; i<oLis.length; i++){//li按钮组切换图片
    oLis[i].index = i;
    oLis[i].onmouseover = function(){
    now = this.index;//建立li按钮组与图片组之间 一一对应的关系
      play();
    }
}
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

function go(){//主函数
    timer=setInterval(play, 1000);
}
go();

//鼠标经过时停止, 离开后继续
container.onmouseover = function(){
    clearInterval(timer);
}

container.onmouseout = function(){
    go();
}

//左右按钮控制轮播图片显示
oLeft.onclick = oRight.onclick = function(){
   if( this==oLeft ){//数组下标 递减
        now--; //3 2 1 0 -1
        if( now==-1 ) now = oLis.length-1;
   }else{
        now++; // 0 1 2 3 4
        if(now == oLis.length) now = 0;
   }

    
   for(var i=0; i<oImgs.length; i++){
        oImgs[i].className = ""; //图片
        oLis[i].className = ""; //li
    }
    oImgs[now].className = "on";
    oLis[now].className = "on";
}

