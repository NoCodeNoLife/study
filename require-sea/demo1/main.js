/**
 * Created by zhaoyi on 2016/1/18.
 */

//定义模块:define();
//调用模块:exports();
//调用模块:seajs.use();接受两个参数:第一个参数:模块地址;第二个参数:回调函数,回调函数内可以随便写一个参数;
//依赖模块:require();

define(function (require, exports, module) {

    var oBtn = document.getElementById('btn');
    var oWrap = document.getElementById('wrap');
    var oBox = document.getElementById('box');
    var oDiv = document.getElementById('div1');

    require('drag.js').drag(oDiv);//调用drag.js里面的drag方法并且传进参数(oDiv);注意：参数不带引号！！！

    oBtn.onclick = function () {
        oWrap.style.display = 'block';
        require('scale.js').scale(oWrap,oBox);
    }

});