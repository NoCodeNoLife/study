/**
 * Created by zhaoshuai on 2016/1/6.
 */
window.onload = function () {

    function getByClass(oParent, sClass) {
        if (oParent.getElementsByClassName) {
            return oParent.getElementsByClassName(sClass);
        } else {  //IE 8 7 6
            var arr = [];
            var reg = new RegExp('\\b' + sClass + '\\b');
            var aEle = oParent.getElementsByTagName('*');
            for (var i = 0; i < aEle.length; i++) {
                if (reg.test(aEle[i].className)) {
                    arr.push(aEle[i]);
                }
            }
            return arr;
        }
    }

    //tab切换
    var oNav = document.getElementById('nav');
    var aLi = oNav.getElementsByTagName('li');
    var classnameArr = ['nav1', 'nav2', 'nav3'];
    var aBox = getByClass(document, 'box');

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].className = classnameArr[i];
        aLi[0].className = 'active1';

        aLi[i].index = i;
        aLi[i].onclick = function () {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = classnameArr[i];
                aBox[i].style.display = 'none';
            }
            if (this.index == 0) {
                this.className = 'active1';
            } else if (this.index == 1) {
                this.className = 'active2';
            } else if (this.index == 2) {
                this.className = 'active3';
            }
            aBox[this.index].style.display = 'block';
        }
    }

    //弹出层
    var aBtn = getByClass(document, 'btn');
    var oMask = getByClass(document, 'mask');
    var clientHeight = document.documentElement.clientHeight;

    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            for (var i = 0; i < aBtn.length; i++) {
                oMask[i].style.display = 'none';
            }
            oMask[this.index].style.display = 'block';
        }
    }

    for (var i = 0; i < oMask.length; i++) {
        oMask[i].style.height = clientHeight + 'px';
        oMask[i].onclick = function () {
            this.style.display = 'none';
        }
    }

}
