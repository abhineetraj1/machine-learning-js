//writing script tag code
var scpt=document.createElement("script");
scpt.src="https://www.gstatic.com/charts/loader.js";
document.body.appendChild(scpt);

//creating div to show graph
var dv = document.createElement("div");
dv.id='myChart';
dv.style = "width:100%;max-width:700px";
document.body.appendChild(dv);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Contry', 'Mhl'],['Middle East',49],['Africa',8],['North America',13],['South and Central America',20],['Others',10]
  ]);
  const options = {title:'World Wide Oil Production'};
  const chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}
