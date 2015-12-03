/**
 * Created by zhaoshuai on 2015/11/30.
 */
/*获取ID*/
function $(id){
    return document.getElementById(id);
};/*获取ID*/

/*获取className,兼容IE6-8*/
function getByClass(oParent,sClass){
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
};/*获取className,兼容IE6-8*/

/*代替window.onload，加载速度更快*/
function addReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',fn,false);
    }else{
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
                fn();
            }
        };
    }
};/*代替window.onload，加载速度更快*/

/*包含className*/
function hasClass(obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b');
    return reg.test(obj.className);
};/*包含className*/

/*添加className*/
function addClass(obj,sClass){
    if(obj.className){
        if(!hasClass(obj,sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
};/*添加className*/

/*删除className*/
function removeClass(obj,sClass){
    var reg=new RegExp('\\b'+sClass+'\\b','g');
    if(hasClass(obj,sClass)){
        obj.className=obj.className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    }
};/*删除className*/

/*获取行间样式和move框架*/
function getStyle(obj,name){
    return(obj.currentStyel || getComputedStyle(obj,false))[name];
}
//move框架
function move(obj,json,options){
    options=options||{};
    options.time=options.time||1000;
    options.type=options.type||'linaer';
    var n=0;
    var count=Math.round(options.time/30);
    var dis={};
    var start={};
    for(var name in json){
        if(name=='opacity'){
            start[name]=parseInt(getStyle(obj,name));
        }else{
            start[name]=parseFloat(getStyle(obj,name));
        }
        dis[name]=json[name]-start[name];
        if(isNaN(start[name])){
            switch(name){
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'width':
                    start[name]=obj.offsetWidth;
                    break;
                case 'height':
                    start[name]=obj.offsetHeight;
                    break;
            }
        }
    }
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            switch(options.type){
                case 'linaer':
                    var cur=start[name]+dis[name]*n/count;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=(1-n/count);
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.fliter='alpha(opacity:"+cur*100+")';
            }else{
                obj.style[name]=cur+'px';
            }
        }
        if(n==count){
            clearInterval(obj.timer);
            options.fn && options.fn();
        }
    },30);
};/*获取行间样式和move框架*/

