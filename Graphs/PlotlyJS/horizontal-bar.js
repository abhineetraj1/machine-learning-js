//writing script tag code
var scpt=document.createElement("script");
scpt.src="https://cdn.plot.ly/plotly-latest.min.js";
document.body.appendChild(scpt);

//creating div to show graph
var dv = document.createElement("div");
dv.id='myPlot';
dv.style = "width:100%;max-width:700px";
document.body.appendChild(dv);

// Graph code
const xArray = [26,19,4,4,4,53];
const yArray = ["US","China","Japan","Germany","India","other"];

const data = [{
  x: xArray,
  y: yArray,
  type: "bar",
  orientation: "h"
}];

const layout = {title:"World GDP"};

Plotly.newPlot("myPlot", data, layout);