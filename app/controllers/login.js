thisWindow = $.login;

var MapModule = require('ti.map');

$.login.addEventListener('open', getUserLocation);
	// Ti.API.error('Calling Ti.Geolocation.getCurrentPosition');
function getUserLocation() {
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
};
