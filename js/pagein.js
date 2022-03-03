const pages=document.getElementById("pages");
const page=pages.children;
var count=page.length;
var bh=document.documentElement.scrollHeight;
var vh=document.documentElement.clientHeight;
window.onload = function() {
    var sUserAgent = navigator.userAgent;
    if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
        for(let i=1;i<count;i++) {
            page[i].style.animation="pagein 0.5s ease-in";
            page[i].style.opacity="1";
        }
    } else {
        var fh=document.documentElement.scrollTop;
        if(fh+vh>=bh) {
            for(let i=0;i<count;i++) {
                page[i].style.animation="pagein 0.5s ease-in";
                page[i].style.opacity="1";
            }
        }
    }
    setTimeout(function() {
        page[0].style.animation="pagein 0.5s ease-in";
        page[0].style.opacity="1"
    },"990");
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