/**
 * Created by zhaoyi on 2016/1/18.
 */
//定义模块:define();
//调用模块:exports();
//调用模块:seajs.use();接受两个参数:第一个参数:模块地址;第二个参数:回调函数,回调函数内可以随便写一个参数;
//依赖模块:require();
//如果使用了grunt合并多个JS文件，会造成require('xxx.js').drag(oDiv)找不到XXX.JS文件,因为路劲改变了。如果要上线,执行合并操作的时候,define要多出两个参数,第一个参数是当前模块的ID,第二个参数是:依赖模块的数组;
//如下所示:当前JS文件为main.js,ID就起名为main.js,main.js依赖drag.js和scale.js两个文件,所以传入的第二个参数,也就是依赖模块的数组就是['drag.js','scale.js']
define('main.js',['drag.js','scale.js'],function (require, exports, module) {

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

define('aaa.js',['range.js'],function (require, exports, module) {

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

define('scale.js',['range.js'],function(require,exports,module){
    //定义拖拽改变元素大小方法:
    function scale(obj1,obj2){
        var downX = 0;//初始按下的X轴
        var downY = 0;//初始按下的Y轴
        var downW = 0;//初始按下的width;
        var downH = 0;//初始按下的height;

        obj2.onmousedown = function(ev){
            var ev = ev || event;
            downX = ev.clientX;
            downY = ev.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;

            document.onmousemove = function(ev){
                var ev = ev || event;
                var W = ev.clientX - downX + downW;
                var H = ev.clientY - downY + downH;
                W = require('range.js').range(W,500,100);//引用range.js中的range方法来限制拖拽的大小,最大宽度为500，最小宽度为100，当前值为W；
                H = require('range.js').range(H,400,100);//引用range.js中的range方法来限制拖拽的大小,最大高度为500，最小高度为100，当前值为H；
                obj1.style.width = W + 'px';
                obj1.style.height = H + 'px';
            }

            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }

    exports.scale = scale;//对外输出scale方法接口，外部通过require('scale.js').scale()调用;
});

define('range.js',[],function(require,exports,module){
    //定义限制拖拽范围方法:
    function range(val, max, min) {//val:当前值;max:最大值;min:最小值;
        if (val > max) {
            return max;
        } else if (val < min) {
            return min;
        } else {
            return val;
        }
    }

    exports.range = range;//对外输出range方法接口，外部通过require('range.js').range()调用;
});