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
    }
};