// JavaScript Document
function loadScript( url,callback ){//callback是指回调函数;
	
	var script = document.creatElement( 'script' );
	
	script.text = 'text/javascript';
	
	if( script.reasyState ){
		
		script.onreadystatechange = function () {
			
			if( script.readyState == 'loaded' || script.readyState == 'complete' ){
			
				script.onreadystatechange = null;
				
				callback();
				
			}
				
		}
			
	}else{
		
		script.onload = function () {
			
			callback();
				
		}
			
	}
	
	script.src = url;
	
	document.getElementsByTagName( 'head' )[0].appendChild( script );
		
};


