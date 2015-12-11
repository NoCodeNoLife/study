
function $(v){
	if(typeof v === 'function'){
		return window.onload = v;
	} else if(typeof v === 'string'){
		return document.getElementById(v);
	} else {
		return v;
	}
}

function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr];

}
