var db = firebase.database();
function myfunction(){
	window.alert('Update in Progress');
	db.ref().child('Check').set(parseInt(document.getElementById('checkq').value));
	db.ref().child('Head').set(document.getElementById('headq').value);
	db.ref().child('Message').set(document.getElementById('messageq').value);
	db.ref().child('MessageFS').set(parseInt(document.getElementById('msq').value));
	db.ref().child('Title').set(document.getElementById('titq').value);
	db.ref().child('TitleFS').set(parseInt(document.getElementById('tsq').value));
	
	

	window.alert('Data Updated');


}