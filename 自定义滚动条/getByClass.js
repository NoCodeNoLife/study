/**
 * Created by zhaoshuai on 2015/11/3.
 */
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
