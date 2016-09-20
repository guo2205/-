var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var hight = canvas.height;
var xoff = width * 0.5;
var yoff = width * 0.5;
for (var i = 1; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(xoff, yoff, i * 15, 0, Math.PI * 2, true);
    ctx.closePath;
    ctx.stroke();
}
alert(width);
