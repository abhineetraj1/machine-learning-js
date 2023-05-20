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
let exp = "Math.sin(x)";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Display using Plotly
const data = [{x:xValues, y:yValues, mode:"lines"}];
const layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);