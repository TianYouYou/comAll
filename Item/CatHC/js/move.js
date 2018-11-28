window.onscroll = function(){
    var topScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var oDiv = document.getElementById('vg2');
    // var oLi = document.getElementById('dnav').getElementsByTagName('li');
    // var oLi1 = document.getElementById('dnav1').getElementsByTagName('li');
    if(topScroll>100){
        oDiv.style.position = 'fixed';
        oDiv.style.top = 0+'px';
        // oLi.style.width = 30+'px';
        // oLi1.style.width = 26+'px';
    }else{
        oDiv.style.position = 'static';
    }
}
