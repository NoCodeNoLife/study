// JavaScript Document
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];

var p2_circle = document.getElementById("p2_circle");

////点击音乐图标按钮
//music.ontouchstart = function () {
//    if( audio.paused ){//判断播放状态,如果是暂停状态;
//        audio.play();//如果是暂停状态,就开始播放;
//        //this.setAttribute('class','play');
//        this.style.animationPlayState = 'running';//播放器按钮的状态是running
//    }else{
//        audio.pause();//否则就暂停播放;
//        //this.setAttribute('class','');
//        this.style.animationPlayState = 'paused';//播放器按钮的状态是paused;
//    }
//}

//当音乐播放完毕,自动停止光盘旋转效果:
audio.addEventListener('ended',function () {//为audio添加一个ended事件，判断是否播放完毕,如果播放完毕，class就为空。
    //music.setAttribute('class','');
    this.style.animationPlayState = 'paused';//播放器按钮的状态是paused;
},false);

//点击音乐图标按钮
music.addEventListener('touchstart',function (event) {
    if( audio.paused ){//判断播放状态,如果是暂停状态;
        audio.play();//如果是暂停状态,就开始播放;
        this.style.animationPlayState = 'running';//播放器按钮的状态是running
    }else{
        audio.pause();//否则就暂停播放;
        this.style.animationPlayState = 'paused';//播放器按钮的状态是paused;
    }
},false)

page1.addEventListener("touchstart", function() {
    this.style.display = "none";
    page2.style.display = "block";

    setTimeout(function() {
        page2.setAttribute("class","page fadeout")
        page3.setAttribute("class","page fadein")
        //page2.style.display = "none";
        //page3.style.display = "block";
    }, 5500);
}, false);

console.log('网页可见区域宽度:'+document.body.clientWidth);
console.log('网页可见区域高度:'+document.body.clientHeight);
console.log('网页可见区域宽度(包括边框的宽):'+document.body.offsetWidth);
console.log('网页可见区域高度(包括边框的高):'+document.body.offsetHeight);
console.log('网页正文全文宽:'+document.body.scrollWidth);
console.log('网页正文全文高:'+document.body.scrollHeight);
console.log('网页被卷去的高:'+document.body.scrollTop);
console.log('网页被卷去的左:'+document.body.scrollLeft);
console.log('网页正文部分上:'+window.screenTop);
console.log('网页正文部分左:'+window.screenLeft);
console.log('屏幕分辨率的高:'+window.screen.height);
console.log('屏幕分辨率的宽:'+window.screen.width);
console.log('屏幕可用工作区高度:'+window.screen.availHeight);
console.log('屏幕可用工作区宽度:'+window.screen.availWidth);












