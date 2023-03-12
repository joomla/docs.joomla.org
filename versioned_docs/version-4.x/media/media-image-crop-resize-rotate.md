<!-- Filename: J4.x:Media:_Image_Crop_Resize_Rotate / Display title: Media: Image Crop Resize Rotate -->

## Problem Images

After upload you may have realised there is a problem with an uploaded
image. Common problems include:

- The image is much to big.
- The interesting part of an image is in a small area.
- The image is rotated through 90 degrees.

These are the problems that the Media component is designed to handle.

As an example, the following image of a cake stand is much too big at
1200 by 1600 pixels and 268 kilobytes, it is too tall for the article
and was rotated 90 degrees on upload. It has been rotated back to normal
and now needs to be cropped and resized.

<img
src="https://docs.joomla.org/images/0/06/J4.x-media-crop-resize-rotate-en.jpg"
decoding="async" data-file-width="800" data-file-height="908"
width="800" height="908" alt="J4.x-media-crop-resize-rotate-en.jpg" />

## Crop

The crop tool allows you to drag to define a crop area. This is a little
tricky: click and drag to start, then grab and drag the corners or top
or bottom or either side. You can set an aspect ratio or None as you see
fit. You can drag the inside of the box you have defined to move it to
centre your subject. You may also manually adjust the X- and Y-Axis
offsets and the width and height.

The quality selector indicates how much compression should be applied.
Too much and the image size in bytes will be too big. Too little and the
display quality of the image will be poor.

Bug Warning!

At the moment the Quality control is not working. This results in a
modified image being larger than it needs to be, sometimes much larger
than the original!

When satisfied, select the Save button in the Toolbar.

The newly cropped image will be saved. **There is no Undo!** In the Crop
view the crop box and values in the crop fields will be wrong (a bug?)
but the crop is done, so move on.

## Resize

The image in this example is still too big at 1070 pixels square. It is
also large at 453 kilobytes. 800 pixels should be sufficient for the
intended use.

Setting the width to 800 pixels also sets height to 800 pixels to
maintain aspect ratio. That gives a file size of 292 kilobytes, which is
still large. Bringing the width down to 640 brings the file size down to
213 kilobytes.

## Rotate

Select the Rotate tab and the appropriate angle.

## Further Information

In this series of tutorials:

- [Managing
  Media](https://docs.joomla.org/J4.x:Managing_Media "J4.x:Managing Media")
- [Media: Upload Delete
  Rename](https://docs.joomla.org/J4.x:Media:_Upload_Delete_Rename "J4.x:Media: Upload Delete Rename")
- [Media: Image Crop Resize
  Rotate](https://docs.joomla.org/J4.x:Media:_Image_Crop_Resize_Rotate "J4.x:Media: Image Crop Resize Rotate")
- [Media:
  Options](https://docs.joomla.org/J4.x:Media:_Options "J4.x:Media: Options")
