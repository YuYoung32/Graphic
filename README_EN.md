# Graphic

languages: [中文](./README.md) | English

`Canvas` `Beizer` `Graphics`


A 1920*1080 graphic wallpaper generator that does not rely on any third-party libraries.

## Features

Randomly generate graphics like this:

1920*1080

![pic1](https://github.com/YuYoung32/Graphic/blob/master/pic1.png)

![pic2](https://github.com/YuYoung32/Graphic/blob/master/pic2.png)

## Usage

Open the `index.html` in the root directory, click the mouse or press `Enter` to generate graphics.

Note: the generated lines are best suited for 1920*1080 size graphics. Other resolutions or preferences need to be manually adjusted.

## Characteristics

- HTML native [Canvas element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) + Beizer line provided by Canvas element, no dependency library
- Carefully selected colors
- Carefully debugged Beizer line parameters and positions

## Directory Structure

```text
│—— .gitignore
│——  index.html 
│——  pic1.png
│——  pic2.png
│——  README.md
│——
|—— src
│    |—— draw.js 
│    |—— main.html
│
|—— test
        playground.html
        playground.js
```

`/index.html` is a web page that can be run directly without any dependencies (JS and HTML mixed, only `/src/draw.js` and `/src/main.html` are placed in the same file)

`/src/draw.js` drawing function

`/src/main.html` display page

`/test/playground.html` display part of debugging Beizer curve parameters

`/test/playground.js` related support for debugging Beizer curve parameters
