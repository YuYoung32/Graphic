//var canvas = document.getElementById('canvas')
var arr0 = [{x:70,y:25},{x:24,y:51}]
var arr1 = [{x:233,y:225},{x:170,y:279},{x:240,y:51}]
var arr2 = [{x:23,y:225},{x:70,y:79},{x:40,y:51},{x:300, y:44}] //3阶之前采用原生方法实现
var arr3 = [{x:333,y:15},{x:70,y:79},{x:40,y:551},{x:170,y:279},{x:17,y:239}]
var arr4 = [{x:53,y:85},{x:170,y:279},{x:240,y:551},{x:70,y:79},{x:40,y:551},{x:170,y:279}]
var bezier0 = new BezierMaker(canvas, arr0, 'black')
var bezier1 = new BezierMaker(canvas, arr1, 'red')
var bezier2 = new BezierMaker(canvas, arr2, 'blue')
var bezier3 = new BezierMaker(canvas, arr3, 'yellow')
var bezier4 = new BezierMaker(canvas, arr4, 'green')
bezier0.drawBezier()
bezier1.drawBezier()
bezier2.drawBezier()
bezier3.drawBezier()
bezier4.drawBezier()