function addMouseWheel(obj, fn) {
    if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        addEventListener("DOMMouseScroll", fnWheel, false);
    } else {
        obj.onmousewheel = fnWheel;
    }

    function fnWheel(ev) {
        var oEvent = ev || event;
        //判断滚动方向
        var bDown = true;
        bDown = oEvent.wheelDelta ? oEvent.wheelDelta < 0 : oEvent.detail > 0;
        fn && fn(bDown);
        oEvent.preventDefault && oEvent.preventDefault();
        return false;
    }
}

window.onload = function () {
    var oBox = document.getElementById("box");
    var oWrap = document.getElementById("wrap");
    var oCon = document.getElementById("content");
    var oScroll = document.getElementById("scroll");
    var oBar = document.getElementById("bar");
    var oBtnUp = document.getElementById("up");
    var oBtnDown = document.getElementById("down");
    var oDiv = oCon.getElementsByTagName('div');
    var oShow = document.getElementById('show');
    var oHeight = (oDiv[0].offsetHeight + 16) * 3 - 16;//scrollBar高度和content高度；
    var aSpan = oCon.getElementsByTagName('span');

    for(var i=0;i<aSpan.length;i++){
        aSpan[i].index = i;
        aSpan[i].onclick = function(){
            for(var i=0;i<aSpan.length;i++){
                oDiv[i].className = '';
                aSpan[i].innerHTML = '设为默认地址';
            }
            oDiv[this.index].className = 'active';
            aSpan[this.index].innerHTML = '默认地址';
        }
    }


    oShow.onclick = function(){
        if (this.className == 'show') {
            move(oCon,{height:(oDiv[0].offsetHeight + 16) * parseInt((oDiv.length/3))});
            this.className = 'hide';
            this.innerHTML = '收起地址';
            oScroll.style.height = oHeight - 36 + 'px';//滚动条的高度减去36是要减去上下按钮自身的高度
            if (oCon.scrollHeight > (oDiv[0].offsetHeight + 16) * 3) {
                oScroll.style.display = "block";
            }
            //oWrap.style.height = oHeight + 'px';
            move(oWrap,{height:(oDiv[0].offsetHeight + 16) * 3 - 16})
            //oBox.style.height = oHeight + 16 + 'px';
            move(oBox,{height: (oDiv[0].offsetHeight + 16) * 3})
            var h = oWrap.offsetHeight / oCon.scrollHeight * oScroll.offsetHeight;//计算滚动条高度
            oBar.style.height = h + "px";
        } else {
            this.className = 'show';
            move(oCon,{height: 161});
            this.innerHTML = '显示地址';
            oScroll.style.display = "none";
            //oWrap.style.height = 161 + 'px';
            move(oWrap,{height: 161});
            move(oBox,{height: 176});
        }
        oWrap.style.position = 'absolute';
        oWrap.style.left = 25 + 'px';
        oWrap.style.top = 20 + 'px';
        oCon.style.position = 'absolute';
        oCon.style.left = 0 + 'px';
        oCon.style.top = 0 + 'px';

    }

    addMouseWheel(oBox, function (bDown) {
        var t = oBar.offsetTop;
        if (bDown) {
            t += 20;
        } else {
            t -= 20;
        }
        setTop(t);
    });

    oBtnUp.onclick = function () {
        var t = oBar.offsetTop - 20;
        setTop(t);
    };

    oBtnDown.onclick = function () {
        var t = oBar.offsetTop + 20;
        setTop(t);
    };

    oBar.onmousedown = function (ev) {
        var oEvent = ev || event;
        var disY = oEvent.clientY - oBar.offsetTop;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var t = oEvent.clientY - disY;
            setTop(t);
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            oBar.releaseCapture && oBar.releaseCapture();
        };

        oBar.setCapture && oBar.setCapture();
        return false;
    };

    function setTop(t) {
        var maxHeight = oScroll.offsetHeight - oBar.offsetHeight;
        if (t < 0) {
            t = 0;
        } else if (t > maxHeight) {
            t = maxHeight;
        }

        var scale = t / maxHeight;
        oBar.style.top = t + "px";
        oCon.style.top = -scale * (oCon.offsetHeight - oWrap.offsetHeight) + "px";
    }
};