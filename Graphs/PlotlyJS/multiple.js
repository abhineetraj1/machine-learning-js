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
let exp1 = "x";
let exp2 = "2*x";
let exp3 = "2*x + 3";

// Generate values
const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

for (let x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
const data = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

// Define Layout
const layout = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);