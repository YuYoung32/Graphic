# Graphic

languages: 中文 | [English](./README_EN.md)

`Canvas` `Beizer` `Graphics`

一个不依赖三方库的1920*1080图形壁纸生成器。

## 功能

随机生成这样的图形：

1920*1080

![pic1](https://github.com/YuYoung32/Graphic/blob/master/pic1.png)

![pic2](https://github.com/YuYoung32/Graphic/blob/master/pic2.png)

## 使用

打开根目录下`index.html`，点击鼠标或者按`Enter`键生成图形。

注意：生成的线条最适配1920*1080尺寸的图形。其他分辨率或偏好需要手动调试。

## 特点

* HTML原生[Canvas元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) + Canvas元素自带的贝塞尔（Beizer）线条，无依赖库
* 精心挑选的颜色
* 精心调试的贝塞尔线条参数和位置

## 目录结构

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

`/index.html` 无需任何依赖，可以直接运行的网页（JS和HTML混合，仅仅是`/src/draw.js`和`/src/main.html`放到了一个文件里）

`/src/draw.js` 画图函数

`/src/main.html` 展示页面

`/test/playground.html` 调试贝塞尔曲线参数的显示部分

`/test/playground.js` 调试贝塞尔曲线参数的相关支持





## 

