"use strict";

// Constructor
// ---------------------------------------------------------------------------------------

function ImageManipulator() {

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
    var canvas = document.getElementById("ImageManipulatorCanvas");
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

function changeImageFormat(img, format) {
    return resizeImage(img, img.width, img.height, format);
}

function rotateRight(img, degrees) {
    createCanvas(img.width, img.height);
    var canvas = document.getElementById("ImageManipulatorCanvas");
    var context = canvas.getContext("2d");
    canvas.width = img.height;
    canvas.height = img.width;
    context.translate(img.height, 0);
    context.rotate(degrees * (Math.PI / 180));
    context.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL();
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
    canvas.setAttribute("id", "ImageManipulatorCanvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    document.body.appendChild(canvas);
}

function destroyCanvas() {
    var canvas = document.getElementById("ImageManipulatorCanvas");
    canvas.parentNode.removeChild(canvas);
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
    changeImageFormat: function(img, format) {
        return changeImageFormat(img, format);
    },
    rotateRight: function(img, degrees) {
        return rotateRight(img, degrees);
    }
};
