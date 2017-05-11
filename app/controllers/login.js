thisWindow = $.login;
myapp.getUserLocation();
$.login.addEventListener('open', function() {
    if(fb.loggedIn) {
        myapp.openDiscover();
    }
});

var db = Ti.Database.install('favou.sqlite', 'favouDB');

// var fb = Alloy.Globals.Facebook;
var fb = require('facebook');

fb.initialize();

fb.permission = ['email', 'name'];
// fb.setLoginBehavior(fb.LOGIN_BEHAVIOR_BROWSER);

fb.addEventListener('login', function(e) {
    if(e.success) {
        getFBDetails(e.data);
    } else if (e.cancelled) {
        alert('cancelled');
    } else {
        alert(e.error);
    }
});

if(Ti.Platform.name === 'android') {
    $.login.fbProxy = fb.createActivityWorker({lifecycleContainer: $.login});
}
fb.addEventListener('logout', function(e) {
    alert('Logged out');
    fb.logout();
});


function getFBDetails() {
    fb.requestWithGraphPath("me", {fields: "name,email,picture"}, "GET", function(e){
		if (e.success){
            loggedInUser = e.result;
			// alert(loggedInUser);
            myapp.openDiscover();


		} else if (e.error){
			alert(e.error);
		} else {

		}
	});
}
