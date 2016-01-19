/**
 * Created by zhaoyi on 2016/1/18.
 */

//定义模块:define();
//调用模块:exports();
//调用模块:seajs.use();接受两个参数:第一个参数:模块地址;第二个参数:回调函数,回调函数内可以随便写一个参数;
//依赖模块:require();

define(function(require,exports,module){
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