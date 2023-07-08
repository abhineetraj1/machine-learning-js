//writing script tag code
var scpt=document.createElement("script");
scpt.src="https://www.gstatic.com/charts/loader.js";
document.body.appendChild(scpt);

//creating div to show graph
var dv = document.createElement("div");
dv.id='myChart';
dv.style = "width:100%;max-width:700px";
document.body.appendChild(dv);

function drawChart() {
	// Set Data
	const data = google.visualization.arrayToDataTable([
	  ['Price', 'Size'],[50,7],[60,8],[70,8],[80,9],[90,9],[100,9],[110,10],[120,11],[130,14],[140,14],[150,15]
	]);
	// Set Options
	const options = {title: 'Land Prices vs Size', hAxis: {title: 'Square Meters'}, vAxis: {title: 'Price in Millions'}, legend: 'none'};
	// Draw Chart
	const chart = new google.visualization.LineChart(document.getElementById('myChart'));
	chart.draw(data, options);
}