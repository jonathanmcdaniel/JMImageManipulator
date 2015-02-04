$(document).ready(function() {
    "use strict";
    var img = document.getElementById("inputImage");
    var imageResizer = new ImageResizer();
    console.log(imageResizer.resizeImage(img, 800, 500, "png"));
    console.log(imageResizer.isPortraitImage(img));
    console.log(imageResizer.changeImageFormat(img, "jpeg"));
});