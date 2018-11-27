   (function(){
    var oPic=document.getElementById("pic");
    var oImg=oPic.getElementsByTagName("img");
    var oUl= document.getElementById("nav");
    var oLi=oUl.getElementsByTagName("li");
    var now = 0;
    for(var i=0; i<oLi.length; i++){
        oLi[i].index = i;
        oLi[i].onmouseover = function(){
        now = this.index;
          play();
        }
    }
    function play(){
         show(); 
        now++;
        if(now == oImg.length) now = 0;
    }
    
    function show(){
        for(var i=0; i<oImg.length; i++){
            oImg[i].className = "";
            oLi[i].className = "";
        }
        oImg[now].className = "open";
        oLi[now].className = "open";
    }
    
    function go(){
        timer=setInterval(play, 2000);
    }
    go();
   })();


   
   
        
   





