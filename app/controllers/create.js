// Arguments passed into this controller can be accessed via the `$.args` object directly or:
// var args = $.args;
thisWindow = $.create;

var newEvent = {};
newEvent.details = {};

function createEvent(e){
    $.createBtn.hide();
    newEvent.creatorId = myapp.getSession('profileId');
    newEvent.creatorName = myapp.getSession('profileName');
    newEvent.eventDate = $.createDate.value;
    newEvent.latitude = "123";
    newEvent.longitude = "123";

    newEvent.details.title = $.createTitle.value;
    newEvent.details.street = "Test vej";
    newEvent.details.zipcode = "1234";
    newEvent.details.city = "Odense";
    newEvent.details.desc = $.createDesc.value;
    newEvent.details.image = myapp.getSession('profilePicture');
    // newEvent.eventAddress = $.createAddress.value;
    // newEvent.eventNeeds = $.createNeeds.value;
    // newEvent.eventCategory = $.createCategory.value;

    var sendData = JSON.stringify(newEvent);
    // alert(sendData);

    var url = "https://mysterious-tor-14838.herokuapp.com/api/event/";
    var xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            var dialog = Ti.UI.createAlertDialog({
              ok: "Okay",
              message: 'Du har ny oprettet et nyt event',
              title: 'Nyt event oprettet'
           });
           dialog.addEventListener('click', function() {
               myapp.openDiscover();
               thisWindow.close();
           });
           dialog.show();
        },
        onerror: function(e) {
    		// this function is called when an error occurs, including a timeout
            // Ti.API.debug(e.error);
            alert(e.error);
        },
        timeout:3000  /* in milliseconds */
    });
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open("POST", url);
    xhr.send(sendData);  // request is actually sent with this statement
}
