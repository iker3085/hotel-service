function fetchGuests () {
    var guests = JSON.parse(localStorage.getItem('guests'));
    var guestList = document.getElementById('guestList');

    guestList.innerHTML = '';

    for (var i = 0; i < guests.length; i++) {
        var bookingId = guests[i].bookingId;
        var bookingDate = guests[i].bookingDate;
        var firstName = guests[i].firstName;
        var lastName = guests[i].lastName;
        var email = guests[i].email;
        var status = guests[i].status;
    };
    $('#guestList').DataTable({
        data: guests,
        columns: [
            { title: 'Booking ID', data: 'bookingId' },
            { title: 'Booking Date', data: 'bookingDate' },
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'E-Mail', data: 'email' },
            { title: 'Status', data: 'status' }
        ]
    });
}