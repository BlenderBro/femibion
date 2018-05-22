// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    //get all buttons
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    const target = document.querySelectorAll('.select');
    const calc = document.getElementById('logo-cont');
    //loop trough buttons and listen for clicks
    for (let i = 0; i < target.length; i++) {
        target[i].addEventListener('click', function () {
            target[i].classList.toggle('selected');
            console.log(target[i].getAttribute('value'));
        }, false);
    }

    calc.addEventListener('click', function () {
        const selected = document.querySelectorAll('selected')
        for (let i = 0; i < selected.length; i++) {

            console.log(selected.getAttribute('value'));
        }
    })

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();