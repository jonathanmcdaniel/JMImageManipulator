$(document).ready(function() {
    "use strict";
    $("#canvasholder").html("<canvas id=\"canvas\" style=\"border:1px solid #000000; width: 525; height: 400;\"></canvas>");
    var img = document.getElementById("inputImage");
    var imageResizer = new ImageResizer();
    console.log(imageResizer.resizeImage(img, 800, 500));
});