// JavaScript Document

var onoff = true;

document.onclick = function () {
	
	if( onoff ){//onoff == true;
		
		document.body.style.background = 'red';	
		
	} else {
		
		document.body.style.background = 'green';	
		
	}
	
	onoff = !onoff;//如果onoff == true,onoff就等于false,如果onoff == false,onoff就等于true,
	
}
