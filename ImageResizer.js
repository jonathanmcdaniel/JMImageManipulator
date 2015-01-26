"use strict";

// Constructor
// ---------------------------------------------------------------------------------------

function ImageResizer() {

}

// Private Functions / Properties
// ---------------------------------------------------------------------------------------

function resizeImage(img, desiredWidth, desiredHeight, format) {

    //Fit Image in Container Size
    var widthRatio = getDesiredRatio(img.width, desiredWidth);
    var heightRatio = getDesiredRatio(img.height, desiredHeight);
    var imageRatio = getImageAspectRatio(img);

    createCanvas(desiredWidth, desiredHeight);

    //Create Canvas with width and height
    var canvas = document.getElementById("ImageResizerCanvas");
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
    var dataURL = canvas.toDataURL("image/" + format);
    var base64String = dataURL.replace(/^data:image\/(jpeg|png|jpg|gif);base64,/, "");
    destroyCanvas();
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
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "ImageResizerCanvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    document.body.appendChild(canvas);
}

function destroyCanvas() {
    var canvas = document.getElementById("ImageResizerCanvas");
    canvas.parentNode.removeChild(canvas);
}

// Public Functions
// ---------------------------------------------------------------------------------------

ImageResizer.prototype = {
    resizeImage: function(img, desiredWidth, desiredHeight) {
        return resizeImage(img, desiredWidth, desiredHeight);
    }
};