# JMImageResizer
A Javascript class to resize an image into a new dimension while keeping original ratios

### Getting Started
1. Add file to project
2. Have an iamge ready to be resized
3. Create new ImageResizer object `var imageResizer = new ImageResizer();`
4. Call resizing function on the object `imageResizer.resizeImage(img, desiredWidth, desiredHeight, desiredFormat);`
5. Handle new image returned in base64 format

### Script Dependencies
**None.** This class was made so that jQuery or any other framework is not needed. It is entirely self-sufficient. The file is loaded through normal script tags but can be easily modified to support RequireJS or similar.

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
