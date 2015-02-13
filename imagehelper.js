$(document).ready(function() {
    "use strict";
    var img = document.getElementById("inputImage");
    var imageManipulator = new ImageManipulator();
    console.log(imageManipulator.resizeImage(img, 800, 500));
    console.log(imageManipulator.isPortraitImage(img));
    console.log(imageManipulator.rotateClockwise(img, 90));
    console.log(imageManipulator.rotateCounterClockwise(img, 90));
});