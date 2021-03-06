thisWindow = $.discover;

var EventsList = Alloy.Collections.eventslist;
var fb = require('facebook');


$.discover.addEventListener('open', function(e) {

});

function addTask() {
    var addTaskController = Alloy.createController('create');
    addTaskController.create.open();
    thisWindow.close();
}

// var dialog = Ti.UI.createAlertDialog({
//     message: 'Enten er der intet indhold eller det er ved at loade.\nSørg for at have internet aktiveret.',
//     ok: 'Okay',
//     title: 'Intet indhold'
// });
// dialog.show();


EventsList.fetch();

function eventDetail(e) {
    var eventData = e.section.getItemAt(e.itemIndex);
	// GET /users/:id
    // var eventDetails = EventsList.get(eventData.event.id);
    // alert(eventData.event.id);

    var url = "https://mysterious-tor-14838.herokuapp.com/api/event/" + eventData.event.id;
    var xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            // this function is called when data is returned from the server and available for use
            // this.responseText holds the raw text return of the message (used for text/JSON)
            // this.responseXML holds any returned XML (including SOAP)
            // this.responseData holds any returned binary data
            // Ti.API.debug(this.responseText);
            // alert(this.responseText);
            // alert('success');

            var dataToPass = JSON.parse(this.responseText);
            Alloy.createController('eventDetail', dataToPass).getView().open({modal:false});
            thisWindow.close();
        },
        onerror: function(e) {
            // this function is called when an error occurs, including a timeout
            Ti.API.debug(e.error);
            alert('error');
        },
        timeout: 2000  /* in milliseconds */
    });
    xhr.open("GET", url);
    xhr.send();  // request is actually sent with this statement

    // alert(eventDetails);
    // Alloy.createController('eventDetail', 'test').getView().open({modal:false});
    // thisWindow.close();

}

var annoView = Ti.UI.createView({
    width: 30,
    height: 30,
    opacity: 0.8
});
var imageView = Ti.UI.createImageView({
    image: "images/selfie.png",
    width: 30,
    height: 30
});
// annoView.add(imageView);

var opera = MapModule.createAnnotation({
    latitude: 55.411756,
    longitude: 10.433579,
    leftView: Ti.UI.createButton({title: 'Læs mere'}),
    image: imageView.toImage(),
    title: 'Event 1',
    subtitle: 'Funktionen er ikke implementeret'
});

var bridge = MapModule.createAnnotation({
    latitude: 55.391756,
    longitude: 10.433579,
    image: imageView.toImage(),
    title: 'Event 2',
    subtitle: 'Funktionen er ikke implementeret'
});

var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {
        latitude: 55.401756,
        longitude: 10.433579,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    },
    annotations: [opera, bridge], //< add these annotations upon creation

});

$.mapview.add(mapview);

function showAdr(e){
    alert(userAddress);
}
