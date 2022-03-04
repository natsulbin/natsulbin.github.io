const pages=document.getElementById("pages");
const page=pages.children;
var count=page.length;
var bh=document.documentElement.scrollHeight;
var vh=document.documentElement.clientHeight;
window.onload = function() {
    var sUserAgent = navigator.userAgent;
    if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
        for(let i=0;i<count;i++) {
            page[i].style.animation="pagein 0.5s ease-in";
            page[i].style.opacity="1";
        }
    } else {
        var fh=document.documentElement.scrollTop;
        if(fh+vh>=bh || fh!=0) {
            for(let i=0;i<count;i++) {
                page[i].style.animation="pagein 0.5s ease-in";
                page[i].style.opacity="1";
            }
        } else {
            setTimeout(function() {
                page[0].style.animation="pagein 0.5s ease-in";
                page[0].style.opacity="1"
            },"900");
        }
    }
}
window.onscroll = function() {
    var fh=document.documentElement.scrollTop;
    for(let i=1;i<count;i++) {
        var distance=page[i].offsetTop - document.documentElement.scrollTop;
        if(distance<700 || fh+vh+100>=bh) {
            page[i].style.animation="pagein 0.5s ease-in";
            page[i].style.opacity="1";
        }
    }
}

// window 失去焦点，停止输出
window.onblur = function() {
    document.title = "(¦3[___] NatsuL"
}; 
// window 每次获得焦点
window.onfocus = function() {
    document.title = "NatsuL"
}