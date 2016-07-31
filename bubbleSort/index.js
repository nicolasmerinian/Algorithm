console.log('ready');

var canvas;
var ctx;
var width;
var height;

(function init() {
	canvas = document.getElementById('canvas');
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
	ctx.fillStyle = "black";
	draw([100, 55, 89, 33, 44, 11]);
}).call();

function draw(data) {
	var n = data.length;
	var w = width / n;
	ctx.clearRect(0, 0, width, height);
	for (var i = 0; i < n; i++) {
		var x = i * 5;
		var y = height - (data[i]);
		var h = height;
		ctx.fillRect(x, y, w, h);
	}
}