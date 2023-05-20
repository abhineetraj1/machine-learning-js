// Create a plotter
const pltr = new XYpltr("myCanvas");
pltr.transformXY();
const xMax = pltr.xMax;
const yMax = pltr.yMax;
const xMin = pltr.xMin;
const yMin = pltr.yMin;

// Create Random XY Pts
const nPnts = 500;
const xPts = [];
const yPts = [];
for (let i = 0; i < nPnts; i++) {
  xPts[i] = Math.random() * xMax;
  yPts[i] = Math.random() * yMax;
}

// Line Function
function f(x) {
  return x * 1.2 + 50;
}

//Plot the Line
pltr.plotLine(xMin, f(xMin), xMax, f(xMax), "black");

// Compute Desired Answers
const desired = [];
for (let i = 0; i < nPnts; i++) {
  desired[i] = 0;
  if (yPts[i] > f(xPts[i])) {desired[i] = 1}
}

// Diplay Desired Result
for (let i = 0; i < nPnts; i++) {
  let color = "blue";
  if (desired[i]) color = "black";
  pltr.plotPoint(xPts[i], yPts[i], color);
}