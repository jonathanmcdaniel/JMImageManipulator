"use strict";

// Constructor
// ---------------------------------------------------------------------------------------

function ImageManipulator() {

}


// Private Function Helpers / Properties
// ---------------------------------------------------------------------------------------

var mainCanvas;
var imageQuality = 0.5;
var imageFormat = "jpeg";
var canvasBGColor = "#000";

function createCanvas(width, height) {
    if (typeof mainCanvas == "undefined") {
        mainCanvas = document.createElement("canvas");
        mainCanvas.setAttribute("id", "ImageManipulatorCanvas");
        mainCanvas.setAttribute("width", width);
        mainCanvas.setAttribute("height", height);
    }
    return mainCanvas;
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

function changeCanvasBGColor(canvas) {
    var context = canvas.getContext("2d");
    context.globalCompositeOperation = "destination-over";
    context.fillStyle = canvasBGColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}


// Exposed Private Function Definitions
// ---------------------------------------------------------------------------------------

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
    context = changeCanvasBGColor(canvas);

    //Extract base64 data from canvas
    var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
    return dataURL;
}

function rotateClockwise(img, degrees) {
    var canvas = createCanvas(img.width, img.height);
    var context = canvas.getContext("2d");
    canvas.width = img.height;
    canvas.height = img.width;
    context.translate(img.height, 0);
    context.rotate(degrees * (Math.PI / 180));
    context.drawImage(img, 0, 0);
    context = changeCanvasBGColor(canvas);
    var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
    return dataURL;
}

function rotateCounterClockwise(img, degrees) {
    var canvas = createCanvas(img.width, img.height);
    var context = canvas.getContext("2d");
    canvas.width = img.height;
    canvas.height = img.width;
    context.translate(0, img.width);
    context.rotate(-degrees * (Math.PI / 180));
    context.drawImage(img, 0, 0);
    context = changeCanvasBGColor(canvas);
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

function destroyCanvas() {
    mainCanvas = undefined;
}

function setImageQuality(quality) {
    imageQuality = quality;
}

function setImageFormat(format) {
    imageFormat = format;
}

function setBGColor(hexColor) {
    canvasBGColor = hexColor;
}


// Exposed Functions
// ---------------------------------------------------------------------------------------

ImageManipulator.prototype = {
    resizeImage: function(img, desiredWidth, desiredHeight) {
        return resizeImage(img, desiredWidth, desiredHeight);
    },
    rotateClockwise: function(img, degrees) {
        return rotateClockwise(img, degrees);
    },
    rotateCounterClockwise: function(img, degrees) {
        return rotateCounterClockwise(img, degrees);
    },
    isPortraitImage: function(img) {
        return isPortraitImage(img);
    },
    destroyCanvas: function() {
        return destroyCanvas();
    },
    setImageQuality: function(quality) {
        return setImageQuality(quality);
    },
    setImageFormat: function(format) {
        return setImageFormat(format);
    },
    setBGColor: function(color) {
        return setBGColor(color);
    }
};