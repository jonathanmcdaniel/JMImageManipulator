# JMImageResizer
A Javascript class to resize an image into a new dimension while keeping the original aspect ratio. It can be thought of as a *scale to fit* function. It will create a new image by resizing the orignal fitting it best within the new constraints.

### Table of Contents
- [Getting Started](#getting-started)
- [Script Dependencies](#script-dependencies)
- [Browser Support](#browser-support)
- [Future Plans](#future-plans)

### Getting Started
1. Add ImageResizer.js to project
2. Have an image ready to be resized
3. Create new ImageResizer object `var imageResizer = new ImageResizer();`
4. Call resizing function on the object `imageResizer.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);`
5. Handle new image returned in base64 format

```
// Create Object
var imageResizer = new ImageResizer();

// Get base64 encoded resized image
var base64 = imageResizer.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);
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
- Function to only change image format
- Expose isPortraitImage(img) to prototype
