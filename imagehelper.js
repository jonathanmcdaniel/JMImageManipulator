$(document).ready(function() {
    "use strict";
    var img = document.getElementById("inputImage");
    var imageManipulator = new ImageManipulator();
    console.log(imageManipulator.resizeImage(img, 800, 500, "png"));
    console.log(imageManipulator.isPortraitImage(img));
    console.log(imageManipulator.changeImageFormat(img, "jpeg"));
    console.log(imageManipulator.rotateRight(img, 90));
    console.log(imageManipulator.rotateLeft(img, 90));
});