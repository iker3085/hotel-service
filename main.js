document.getElementById('checkInForm').addEventListener('submit', saveGuest);

function saveGuest(e) {
	var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd = '0'+dd
	} 
	if(mm<10) {
	    mm = '0'+mm
	} 
	today = mm + '/' + dd + '/' + yyyy;
	
	var guestId = S4()+S4()+S4()+S4();
	var guestBookingDate = today;
	var guestFirstName = document.getElementById('guestFirstName').value;
	var guestLastName = document.getElementById('guestLastName').value;
	var guestEmail = document.getElementById('guestEmail').value;
	var guestStatus = 'Checked In';

	var guest = {
		bookingId: guestId,
		bookingDate: guestBookingDate,
		firstName: guestFirstName,
		lastName: guestLastName,
		email: guestEmail,
		status: guestStatus
	}

	if (localStorage.getItem('guests') == null) {
		var guests = [];
		guests.push(guest); // das object guest wird in den leeren array guests gepusht
		localStorage.setItem('guests', JSON.stringify(guests));		
	} else {
	    var guests = JSON.parse(localStorage.getItem('guests'));
	    guests.push(guest);
	    localStorage.setItem('guests', JSON.stringify(guests));
    }

	document.getElementById('checkInForm').reset();

	fetchGuests();

	e.preventDefault();
}


