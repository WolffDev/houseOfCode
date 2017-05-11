// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var eventDetails = arguments[0];
$.eventDetail.addEventListener('open', function() {
    alert(eventDetails);
})
