const pages=document.getElementById("pages");
const page=pages.children;
var count=page.length;
var bh=document.documentElement.scrollHeight;
var vh=document.documentElement.clientHeight;
window.onload = function() {
    var fh=document.documentElement.scrollTop;
    if(fh+vh>=bh) {
        for(let i=0;i<count;i++) {
            page[i].style.animation="pagein 0.5s ease-in";
            page[i].style.opacity="1";
        }
    }
}
window.onscroll = function() {
    var fh=document.documentElement.scrollTop;
    for(let i=0;i<count;i++) {
        var distance=page[i].offsetTop - document.documentElement.scrollTop;
        if(distance<500 || fh+vh>bh) {
            page[i].style.animation="pagein 0.5s ease-in";
            page[i].style.opacity="1";
        }
    }
}