// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var eventDetails = $.args;
$.eventDetail.addEventListener('open', function() {
    alert(eventDetails);
});

$.eventTitle.text = eventDetails.details.title;
$.eventDate.text = eventDetails.eventDate;
$.eventImage.setImage(eventDetails.details.image);
$.eventCreator.text = eventDetails.creatorName;
$.addressText.text = eventDetails.details.street + ", " + eventDetails.details.zipcode + " " + eventDetails.details.city;
$.categoryText.text = "Ikke implementeret"
$.descContent.text = eventDetails.details.desc;
