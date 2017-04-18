var thisWindow;

// Global colors
Alloy.Globals.viewTitle = "#54d4d4"; // lightblue
Alloy.Globals.blueText = "#66dad4"; // lightblue text, different from viewTitle
Alloy.Globals.whiteText = "#ffffff"; // plain white text
Alloy.Globals.blueElement = "#58d3ca"; // lightblue color for elements, like button and back arrow
Alloy.Globals.redElement = "#b83030"; // red color, for the delete button
Alloy.Globals.tabIcon = "#172935"; // darkblue color for the icon in the tabGroup at the bottom
Alloy.Globals.tabIconBackground = "#192834"; // darkblue color for the tappend icons in the bottom
Alloy.Globals.backgroundColor = "#182b38"; // background color for all the views

// Global Require
// Alloy.Globals.Map = require('ti.map');

Alloy.Globals.lobster = "Lobster";
Alloy.Globals.roboto = "Roboto-Light";


// USAGE
// In a *.tss file you can write the following to get a specific color:
// ".Label": {
// 	color: Alloy.Globals.blueElement
// }

var myAddress = {};

var MapModule = require('ti.map');

var myapp = {
    openDiscover: function() {
        var discoverController = Alloy.createController('discover');
        discoverController.discover.open();
        thisWindow.close();
    },
    openLogin: function() {
        var discoverController = Alloy.createController('login');
        discoverController.login.open();
        thisWindow.close();
    },
    openCreate: function() {
        var createController = Alloy.createController('create');
        createController.create.open();
        thisWindow.close();
    },
    openDescription: function() {
        var descriptionController = Alloy.createController('description');
        descriptionController.description.open();
        thisWindow.close();
    },
    openProfile: function() {
        var profileController = Alloy.createController('profile');
        profileController.profile.open();
        thisWindow.close();
    },
    openRegTasks: function() {
        var regTasksController = Alloy.createController('regTasks');
        regTasksController.regTasks.open();
        thisWindow.close();
    },
    openSettigns: function() {
        var settingsController = Alloy.createController('settings');
        settingsController.settings.open();
        thisWindow.close();
    },
    openTasks: function() {
        var tasksController = Alloy.createController('tasks');
        tasksController.tasks.open();
        thisWindow.close();
    },
    getUserLocation: function() {
        if (Ti.Geolocation.locationServicesEnabled) {
    		Ti.Geolocation.getCurrentPosition(function (event) {
                var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng="+event.coords.latitude+","+event.coords.longitude;
                /* web-service call */
                var addrReq = Titanium.Network.createHTTPClient();
                addrReq.open("GET",addrUrl);
                addrReq.send(null);

                addrReq.onload = function()
                {
                    var response = JSON.parse(this.responseText);

                    if(response.status == "OK"){
                        var resLen = response.results[0].address_components.length;
                        for(var i=0; i < resLen; i++) {
                            switch (response.results[0].address_components[i].types[0])
                            {
                                case "street_number":
                                    Ti.API.info("street number : "+response.results[0].address_components[i].long_name);

                                    myAddress.street_number = response.results[0].address_components[i].long_name;
                                    break;
                                case "route":
                                    Ti.API.info("street name : "+response.results[0].address_components[i].long_name);

                                    myAddress.street_name = response.results[0].address_components[i].long_name;
                                    break;
                                case "locality":
                                    Ti.API.info("city name : "+response.results[0].address_components[i].long_name);

                                    myAddress.city = response.results[0].address_components[i].long_name;
                                    break;
                                // case "administrative_area_level_1":
                                //     Ti.API.info("state name : "+response.results[0].address_components[i].long_name);
                                //     break;
                                case "postal_code":
                                    Ti.API.info("zip code : "+response.results[0].address_components[i].long_name);

                                    myAddress.postal_code = response.results[0].address_components[i].long_name;
                                    break;
                                // case "country":
                                //     Ti.API.info("country name : "+response.results[0].address_components[i].long_name);
                                //     break;
                            }
                        }
                    }else{
                        alert('','Unable to find Address, be sure to have GPS and Internet activated on your phone.');
                    }

                };

    			// Ti.API.info('Ti.Geolocation.getCurrentPosition Callback Success: ' + event.success);
                //
    	    	// Ti.UI.createAlertDialog({
                //     title: 'Geolocation',
                //     message: JSON.stringify(event.coords),
                //     ok: 'OK'
    	    	// }).show();
                //
                //
    			// if (event.error) {
    	        //     Ti.API.info('Error: ' + event.error);
    	        // } else {
    	        //     Ti.API.info(JSON.stringify(event.coords));
    	        // }
    	    });
    	}else{
    		Ti.Geolocation.requestLocationPermissions();
    	}
    }
};
