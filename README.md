# JMImageManipulator
A Javascript class to resize an image into a new dimension while keeping the original aspect ratio. It can be thought of as a *scale to fit* function. It will create a new image by resizing the orignal fitting it best within the new constraints.

### Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Script Dependencies](#script-dependencies)
- [Browser Support](#browser-support)
- [Future Plans](#future-plans)

### Getting Started
1. Add ImageManipulator.js to project
2. Have an image ready to be resized
3. Create new ImageManipulator object `var imageManipulator = new ImageManipulator();`
4. Call resizing function on the object `imageManipulator.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);`
5. Handle new image returned in base64 format

```
// Create Object
var imageManipulator = new ImageManipulator();

// Get base64 encoded resized image
var base64 = imageManipulator.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);
```

### Features
##### resizeImage(img, desiredWidth, desiredHeight, desiredFormat)
Takes in an image object, desired width, height and format. Returns a base64 string with the data of the new image. PNG is the default format.
```
var imageManipulator = new ImageManipulator();
var newImageData = imageManipulator.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);
```

##### isPortraitImage(img)
Takes in an image object as an argument, returns a boolean.
```
var imageManipulator = new ImageManipulator();
var portraitImageBoolean = imageManipulator.isPortraitImage(img);
```

##### changeImageFormat(img, desiredFormat)
Takes in an image object and desired format as arguments. Returns a base64 string with the data of the new image. PNG is the default format.
```
var imageManipulator = new ImageManipulator();
var newImageData = imageManipulator.changeImageFormat(img, desiredFormat);
```

### Script Dependencies
**None.** This class was made so that jQuery or any other framework is not needed. It is entirely self-sufficient. The class can be loaded through normal script tags but can be easily modified to support RequireJS or similar.

### Browser Support
This class should work on all browsers that support drawing to the html5 canvas. That should mean the following and above should work:
- IE 9
- Firefox 33
- Chrome 31
- Safari 7.1
- Opera 26
- iOS Safari 7.1
- Android Browser 4.1
- Chrome for Android 40

### Future Plans
- Better comments
