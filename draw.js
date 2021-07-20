document.addEventListener('keydown', draw);

function draw() {
    var startPoints = [{x: 200, y: -500}, {x: 0, y: -400}, {x: 0, y: 0}];//各个图形的起始点，从底层到上层
    var endPoints = [{x: 4000, y: 300}, {x: 2080, y: 1098}, {x: 2620, y: 1480}]//各个图形的结束点，从底层到上层
    var selColors = ["", "", "", ""];//全局变量预设：不重复的四种颜色
    getColors(selColors);//获取随机颜色
    var canvas = document.getElementById('canvas');
    //开始绘图！
    var ctx = canvas.getContext('2d');

    //每次绘图前先清空画板
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //阴影设置
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = -15;
    ctx.shadowBlur = 50;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

    //底层
    ctx.rect(0, 0, 1920, 1080)
    ctx.fillStyle = selColors[4];
    ctx.fill();

    //次底层
    drawGraph(0, startPoints, endPoints, selColors, ctx);

    //次顶层
    drawGraph(1, startPoints, endPoints, selColors, ctx);

    //顶层
    drawGraph(2, startPoints, endPoints, selColors, ctx);

    /*测试区域，删
    ctx.strokeRect(0, 0, 1920, 1080);//显示边框
    ctx.strokeRect(1920, 0, 960, 1080); //x max 2880
    ctx.strokeRect(0, 1080, 1920, 540); //y max 1620
    */

}

//颜色选择模块
function getColors(selColors) {
    //最随机的颜色
    /*var getRandomColor = function () {
        return '#' + (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
            && (color.length == 6) ? color : arguments.callee(color);
        })('');
    }*/
    //颜色平均，较为柔和
    /*function getRandomColor(){
        var r = (Math.round(Math.random()* 127) + 127).toString(16);
        var g = (Math.round(Math.random()* 127) + 127).toString(16);
        var b = (Math.round(Math.random()* 127) + 127).toString(16);
        return '#' + r + g + b;
    }*/

    //最棒的颜色！生成一个不重复的含有4种颜色的数组
    var selTemp;
    var colors = ["#34568B", "#FF6F61", "#6B5B95", "#88B04B",
        "#F7CAC9", "#92A8D1", "#955251", "#B565A7",
        "#009B77", "#DD4124", "#D65076", "#EFC050",
        "#9B2335", "#DFCFBE", "#55B4B0", "#E15D44",
        "#BC243C", "#C3447A"];

    function abolishColor(colorsT, selColors) {
        for (var i = 0; i < 4; i++) {
            if (colorsT == selColors[i]) {
                return false;//存在相等就不能加入
            }
        }
        return true;//颜色不同，可以加入
    }

    for (var i = 0; i < 4;) {
        selTemp = Math.floor(Math.random() * 18);
        if (abolishColor(colors[selTemp], selColors)) {
            selColors[i] = colors[selTemp];
            i++;
        }
    }
}

//获取在绘图区域的随机的X坐标
function getCoordX() {
    return Math.floor(Math.random() * 1080);
}

//获取在绘图区域的随机的Y坐标
function getCoordY() {
    return Math.floor(Math.random() * 1920);
}

//画里面的图形
function drawGraph(i, startPoints, endPoints, selColors, ctx) {

    var xCoord2 = getCoordX();
    var xCoord3 = getCoordX();
    var yCoord2 = getCoordY();
    var yCoord3 = getCoordY();
    if (i == 0) {
        while (yCoord2 > 300 && yCoord3 > 300) {
            yCoord2 = getCoordY();
        }
    }
    if(i == 1){
        while (yCoord2 > 500 && yCoord3 > 500) {
            yCoord2 = getCoordY();
        }
    }
    ctx.beginPath();//开始路径
    ctx.moveTo(startPoints[i].x, startPoints[i].y);//画笔落在开始点
    ctx.bezierCurveTo(xCoord2, yCoord2, xCoord3, yCoord3, endPoints[i].x, endPoints[i].y);//三阶贝塞尔曲线
    ctx.moveTo(endPoints[i].x, endPoints[i].y);

    ctx.lineTo(3000, 3000);
    ctx.lineTo(0, 3000);
    ctx.lineTo(0, 0);
    ctx.lineTo(startPoints[i].x, startPoints[i].y);
    ctx.fillStyle = selColors[i];//设置颜色
    ctx.fill();


}