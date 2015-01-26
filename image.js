/* global $, console */

$(document).ready(function() {
    "use strict";
    $("#canvasholder").html("<canvas id=\"canvas\" style=\"border:1px solid #000000; width: 525; height: 400;\"></canvas>");
    var img = document.getElementById("inputImage");
    console.log(resizeImage(img, 800, 500));
});

function resizeImage(img, desiredWidth, desiredHeight) {
    "use strict";

    //Fit Image in Container Size
    var widthRatio = getDesiredRatio(img.width, desiredWidth);
    var heightRatio = getDesiredRatio(img.height, desiredHeight);
    var imageRatio = getImageAspectRatio(img);

    //Create Canvas with width and height
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    if (heightIsContrainingSide(widthRatio, heightRatio) === true) {
        if (isPortraitImage(img) === true) {
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;
            context.drawImage(img, 0, 0, desiredHeight * imageRatio, desiredHeight);
        } else {
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;
            context.drawImage(img, 0, 0, desiredHeight * imageRatio, desiredHeight);
        }
    } else {
        if (isPortraitImage(img) === true) {
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;
            context.drawImage(img, 0, 0, desiredWidth, desiredWidth / imageRatio);
        } else {
            canvas.width = desiredWidth;
            canvas.height = desiredHeight;
            context.drawImage(img, 0, 0, desiredWidth, desiredWidth / imageRatio);
        }
    }

    //Extract base64 data from canvas
    var dataURL = canvas.toDataURL("image/jpeg");
    var base64String = dataURL.replace(/^data:image\/jpeg;base64,/, "");

    return base64String;
}

function isPortraitImage(img) {
    if (img.height > img.width) {
        return true;
    } else {
        return false;
    }
}

function heightIsContrainingSide(widthRatio, heightRatio) {
    "use strict";
    if (widthRatio > heightRatio) {
        return true;
    } else {
        return false;
    }
}

function getImageAspectRatio(img) {
    "use strict";
    return (img.width / img.height);
}

function getDesiredRatio(original, desired) {
    "use strict";
    return (desired / original);
}
