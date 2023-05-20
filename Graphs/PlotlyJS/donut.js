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
const xArray = [37,30,8,23];
const yArray = ["India","China","US","Others"];

const data = [{
  labels: xArray,
  values: yArray,
  hole: .4,
  type: "pie"
}];

const layout = {title:"World population share %"};

Plotly.newPlot("myPlot", data, layout);