// JavaScript Document
function initUI() {
	var doc = document;
		bd = doc.body;
		links = doc.getElementsByTagName('tagbanem');
		i = 0;
		len = links.length;
		while( i<len ){
			update( links[i++] );	
		}	
		doc.getElementById('id').onclick = function () {
			start();	
		}
		bd.className = 'acive';
}