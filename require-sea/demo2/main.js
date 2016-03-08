// JavaScript Document

//A开发

define(function (require, exports, module) {

    var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');

    require('./drag.js').drag(oDiv3);

    oInput.onclick = function () {

        oDiv1.style.display = 'block';

        require('./scale.js').scale(oDiv1, oDiv2);

    };

});


function getStyle(obj, attr, value) {
    if (!value) {
        if (obj.currentStyle) {
            return obj.currentStyle(attr)
        }
        else {
            obj.getComputedStyle(attr, false)
        }
    }
    else {
        obj.style[attr] = value
    }
}
