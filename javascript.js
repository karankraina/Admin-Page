var db = firebase.database();
var c = 6;
function myfunction(){
	if (document.getElementById('checkq').value != ""){
		db.ref().child('Check').set(parseInt(document.getElementById('checkq').value));
	}
	if (document.getElementById('headq').value!=""){
		db.ref().child('Head').set(document.getElementById('headq').value);
	}
	if (document.getElementById('messageq').value!=""){
		db.ref().child('Message').set(document.getElementById('messageq').value);
	}
	if (document.getElementById('msq').value!=""){
		db.ref().child('MessageFS').set(parseInt(document.getElementById('msq').value));
	}
	if (document.getElementById('titq').value!=""){
		db.ref().child('Title').set(document.getElementById('titq').value);
	}
	if (document.getElementById('tsq').value!=""){
		db.ref().child('TitleFS').set(parseInt(document.getElementById('tsq').value));
	}
	
	window.alert('Data Updated');


}