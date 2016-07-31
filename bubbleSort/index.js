console.log('ready');

var canvas;
var ctx;
var width;
var height;
var nbData;
var maxDataValue;
var time;

(function init() {
	canvas = document.getElementById('canvas');
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
	ctx.fillStyle = "black";
	nbData = 100;
	maxDataValue = 400;
	time = 1000 / 30;
	var data = getData(nbData);
	run(data, bubbleSort);
}).call();

function getData(n) {
	console.log("getData");
	var array = [];
	for (var i = 0; i < n; i++) {
		array.push(Math.floor(Math.random() * maxDataValue));
	}
	console.log("getData array : " + Array.sort);
	return array;
}

function run(data, sortFunction) {
	console.log("run");
	for (var i = 0; i < data.length; i++) {
		data = update(data, i, sortFunction);
	}
	setTimeout(function() {
		run(data, sortFunction);
	}, time);
}

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

function update(data, i, sortFunction) {
	draw(data);
	return sortFunction(data, i);
}

function bubbleSort(data, i) {
	var j = i + 1;
	while (data[i] > data[j]) {
		// temp = data[i];
		// data[i] = data[j];
		// data[j] = temp;
		swap(data, i, j);
		j++;
	}
	return data;
}

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}




