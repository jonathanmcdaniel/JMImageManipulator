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

/* 'Singleton' Pattern Canvas Creation
* If a canvas has been created before, return it, else create a new one.
*/
function createCanvas(width, height) {
  if (typeof mainCanvas === "undefined") {
    mainCanvas = document.createElement("canvas");
    mainCanvas.setAttribute("id", "ImageManipulatorCanvas");
    mainCanvas.setAttribute("width", width);
    mainCanvas.setAttribute("height", height);
  }
  return mainCanvas;
}

/* Checks to determine if the height of the image exceeds the height of
* the desired height.
*/
function heightIsContrainingSide(widthRatio, heightRatio) {
  if (widthRatio > heightRatio) {
    return true;
  } else {
    return false;
  }
}

/* Returns the aspect ration of width/height as a decimal
*/
function getImageAspectRatio(img) {
  return (img.width / img.height);
}

/* Returns the ratio of an original size to the desired size as a decimal
* (desiredSize / originalSize)
*/
function getDesiredRatio(original, desired) {
  return (desired / original);
}

/* Changes the background color of the canvas when an image is drawn
* Can be any html acceptable format
*/
function changeCanvasBGColor(canvas) {
  var context = canvas.getContext("2d");
  context.globalCompositeOperation = "destination-over";
  context.fillStyle = canvasBGColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}


// Exposed Private Function Definitions
// ---------------------------------------------------------------------------------------


/* Resizes an image to fit within new contraints
* Best compared to a sizeToFit function
* Returns a dataURL for the new image
*/
function resizeImage(img, desiredWidth, desiredHeight) {
  var widthRatio = getDesiredRatio(img.width, desiredWidth);
  var heightRatio = getDesiredRatio(img.height, desiredHeight);
  var imageRatio = getImageAspectRatio(img);
  var canvas = createCanvas(desiredWidth, desiredHeight);
  var context = canvas.getContext("2d");
  canvas.width = desiredWidth;
  canvas.height = desiredHeight;
  if (heightIsContrainingSide(widthRatio, heightRatio) === true) {
    context.drawImage(img, ((canvas.width - (desiredHeight * imageRatio)) / 2), 0, desiredHeight * imageRatio, desiredHeight);
  } else {
    context.drawImage(img, 0, ((canvas.height - (desiredWidth / imageRatio)) / 2), desiredWidth, desiredWidth / imageRatio);
  }
  context = changeCanvasBGColor(canvas);
  var dataURL = canvas.toDataURL("image/" + imageFormat, imageQuality);
  return dataURL;
}

/* Rotates an image a defined number of degrees clockwise
* Returns a dataURL for the new image
*/
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

/* Rotates an image a defined number of degrees counter-clockwise
* Returns a dataURL for the new image
*/
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

/* Checks if an image is in the portrait orientation
* Will return false for square images
* Returns boolean
*/
function isPortraitImage(img) {
  if (img.height > img.width) {
    return true;
  } else {
    return false;
  }
}

/* Destroys the working canvas created for manipulations
* Returns undefined
*/
function destroyCanvas() {
  mainCanvas = undefined;
}

/* Sets the image quality for the output image
* Takes decimal between 0 and 1
* Returns undefined
*/
function setImageQuality(quality) {
  imageQuality = quality;
}

/* Sets the image format for the output image
* Takes string image type - png, gif, jpg
* Returns undefined
*/
function setImageFormat(format) {
  imageFormat = format;
}

/* Sets the image background color for the output image
* Changes the letterboxing color around the image
* Takes decimal between 0 and 1
* Returns undefined
*/
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
