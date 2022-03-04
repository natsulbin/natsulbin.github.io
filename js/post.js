window.onload = function(){
    const post = document.getElementById("post-inner-content");
    const quotes = document.getElementsByTagName("blockquote");
    const Intro = quotes[0];
    post.insertBefore(Intro, post.firstChild);
    Intro.innerText = "　　" + Intro.innerText;
}
var count = 1;
var interval_output = null;
     
// window 失去焦点，停止输出
window.onblur = function() {
    document.title = "(¦3[___] NatsuL"
}; 
// window 每次获得焦点
window.onfocus = function() {
    document.title = "NatsuL"
}