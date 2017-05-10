thisWindow = $.discover;

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
    title: 'Sydney Opera House',
    subtitle: 'Sydney, New South Wales, Australia'
});

var bridge = MapModule.createAnnotation({
    latitude: 55.391756,
    longitude: 10.433579,
    image: imageView.toImage(),
    title: 'Sydney Opera House',
    subtitle: 'Sydney, New South Wales, Australia'
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
    alert(myAddress);
}
