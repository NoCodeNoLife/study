/**
 * Created by zhaoyi on 2015/12/8.
 */
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle : getComputedStyle(obj)[attr];
}

function move(obj, attr, dir, target,endFn) {//obj:移动的物体，dir:移动的步长，attr:移动的方向，target:目标点
    dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
    //步长 = 当前的位置 < 目标点，步长是正整数，否则的话，步长是负数。
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = parseInt(getStyle(obj, attr)) + dir;
        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed == target) {
            clearInterval(obj.timer);
            endFn && endFn();
            //如果endFn存在，也就是不是undefined的话才会走到 &&的后面，也就是执行endFn函数。
        }
    }, 30);
}
