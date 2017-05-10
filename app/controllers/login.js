thisWindow = $.login;
myapp.getUserLocation();

// var fb = Alloy.Globals.Facebook;
var fb = require('facebook');

fb.initialize();
if(fb.loggedIn){
    fb.logout();
}

fb.permission = ['email', 'name'];
// fb.setLoginBehavior(fb.LOGIN_BEHAVIOR_BROWSER);
// fb.addEventListener('click', function(){
// 	fb.authorize();
// });

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
});


function getFBDetails() {
    fb.requestWithGraphPath("me", {fields: "name,email,picture"}, "GET", function(e){
		if (e.success){
			alert(e.result);
		} else if (e.error){
			alert(e.error);
		} else {

		}
	});
}
