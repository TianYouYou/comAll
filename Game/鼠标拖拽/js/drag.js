   
    function drag(elem){   
        elem.onmousedown = function(ev){//鼠标按下时得到:
            var e = ev || event; 
            var x0 = this.offsetLeft;
            var y0 = this.offsetTop;
        
            var x1 = e.clientX;
            var y1 = e.clientY;
        
            document.onmousemove = function(ev){
            var e = ev || event;
            var x2 = e.clientX;
            var y2 = e.clientY;

            var oWidth =elem.offsetWidth;
            var disX = document.documentElement.clientWidth-oWidth || document.body.clientWidth-oWidth;
            var oHeight =elem.offsetHeight;
            var disY = document.documentElement.clientHeight-oHeight || document.body.clientHeight-oHeight;
            console.log(disX, disY);

            //块的终点位置: x, y
            x = x0+(x2-x1);
            y = y0+(y2-y1);

            //只允许块在可视区域内活动
            if(x<50) x=0; //可视区域的左边
            if(y<50) y=0; //可视区域的上边
            if(x+50>disX) x=disX; //可视区域的右边
            if(y+50>disY) y=disY; ////可视区域的下边 distance:距离

            //块动画
            elem.style.left = x+"px";
            elem.style.top = y+"px";
            // console.log(x, y);
        }
        
            //结束鼠标拖拽
        elem.onmouseup = function(){
                document.onmousemove = null;
            }
            return false;
        }
    }

