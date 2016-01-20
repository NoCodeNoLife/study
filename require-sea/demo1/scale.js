/**
 * Created by zhaoyi on 2016/1/18.
 */

//定义模块:define();
//调用模块:exports();
//调用模块:seajs.use();接受两个参数:第一个参数:模块地址;第二个参数:回调函数,回调函数内可以随便写一个参数;
//依赖模块:require();

define(function(require,exports,module){
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







