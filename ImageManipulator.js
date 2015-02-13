"use strict";

// Constructor
// ---------------------------------------------------------------------------------------

function ImageManipulator() {

}

// Private Functions / Properties
// ---------------------------------------------------------------------------------------

var mainCanvas;
var imageQuality = 0.5;
var imageFormat = "jpeg";

function resizeImage(img, desiredWidth, desiredHeight) {

    //Fit Image in Container Size
    var widthRatio = getDesiredRatio(img.width, desiredWidth);
    var heightRatio = getDesiredRatio(img.height, desiredHeight);
    var imageRatio = getImageAspectRatio(img);

    //Create Canvas with width and height
    var canvas = createCanvas(desiredWidth, desiredHeight);
    var context = canvas.getContext("2d");
    canvas.width = desiredWidth;
    canvas.height = desiredHeight;
    if (heightIsContrainingSide(widthRatio, heightRatio) === true) {
        if (isPortraitImage(img) === true) {
            context.drawImage(img, ((canvas.width - (desiredHeight * imageRatio)) / 2), 0, desiredHeight * imageRatio, desiredHeight);
        } else {
            context.drawImage(img, ((canvas.width - (desiredHeight * imageRatio)) / 2), 0, desiredHeight * imageRatio, desiredHeight);
        }
    } else {
        if (isPortraitImage(img) === true) {
            context.drawImage(img, 0, ((canvas.height - (desiredWidth / imageRatio)) / 2), desiredWidth, desiredWidth / imageRatio);
        } else {
            context.drawImage(img, 0, ((canvas.height - (desiredWidth / imageRatio)) / 2), desiredWidth, desiredWidth / imageRatio);
        }
    }

    //Extract base64 data from canvas
    var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
    return dataURL;
}

function rotateRight(img, degrees) {
    var canvas = createCanvas(img.width, img.height);
    var context = canvas.getContext("2d");
    canvas.width = img.height;
    canvas.height = img.width;
    context.translate(img.height, 0);
    context.rotate(degrees * (Math.PI / 180));
    context.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
    return dataURL;
}

function rotateLeft(img, degrees) {
    var canvas = createCanvas(img.width, img.height);
    var context = canvas.getContext("2d");
    canvas.width = img.height;
    canvas.height = img.width;
    context.translate(0, img.width);
    context.rotate(-degrees * (Math.PI / 180));
    context.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
    return dataURL;
}

function isPortraitImage(img) {
    if (img.height > img.width) {
        return true;
    } else {
        return false;
    }
}

function heightIsContrainingSide(widthRatio, heightRatio) {
    if (widthRatio > heightRatio) {
        return true;
    } else {
        return false;
    }
}

function getImageAspectRatio(img) {
    return (img.width / img.height);
}

function getDesiredRatio(original, desired) {
    return (desired / original);
}

function createCanvas(width, height) {
    if (typeof mainCanvas == "undefined") {
        mainCanvas = document.createElement("canvas");
        mainCanvas.setAttribute("id", "ImageManipulatorCanvas");
        mainCanvas.setAttribute("width", width);
        mainCanvas.setAttribute("height", height);
    }
    return mainCanvas;
}

function destroyCanvas() {
    mainCanvas = undefined;
}

function setImageQuality(quality) {
    imageQuality = quality;
}

function setImageFormat(format) {
    imageFormat = format;
}

// Public Functions
// ---------------------------------------------------------------------------------------

ImageManipulator.prototype = {
    resizeImage: function(img, desiredWidth, desiredHeight, format) {
        return resizeImage(img, desiredWidth, desiredHeight, format);
    },
    isPortraitImage: function(img) {
        return isPortraitImage(img);
    },
    rotateRight: function(img, degrees) {
        return rotateRight(img, degrees);
    },
    rotateLeft: function(img, degrees) {
        return rotateLeft(img, degrees);
    },
    destroyCanvas: function() {
        return destroyCanvas();
    },
    setImageQuality: function(quality) {
        return setImageQuality(quality);
    },
    setImageFormat: function(format) {
        return setImageFormat(format);
    }
};