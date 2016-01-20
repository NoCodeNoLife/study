/**
 * Created by zhaoyi on 2016/1/18.
 */

//定义模块:define();
//调用模块:exports();
//调用模块:seajs.use();接受两个参数:第一个参数:模块地址;第二个参数:回调函数,回调函数内可以随便写一个参数;
//依赖模块:require();

define(function (require, exports, module) {

    //定义drag方法:
    function drag(obj) {
        var disX = 0;
        var disY = 0;
        obj.onmousedown = function (ev) {
            var ev = ev || event;
            disX = ev.clientX - obj.offsetLeft;
            disY = ev.clientY - obj.offsetTop;

            document.onmousemove = function (ev) {
                var ev = ev || event;
                var L = ev.clientX - disX;
                var T = ev.clientY - disY;
                L = require('range.js').range(L,document.documentElement.clientWidth - obj.offsetWidth, 0);//引用range.js中的range方法来限制拖拽的大小
                T = require('range.js').range(T,document.documentElement.clientHeight - obj.offsetHeight, 0);//引用range.js中的range方法来限制拖拽的大小
                obj.style.left = L + 'px';
                obj.style.top = T + 'px';
            }

            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }

            return false;
        }

    }

    exports.drag = drag;//对外输出drag方法接口文件;外部可以通过 require('drag.js').drag(参数)调用;

});