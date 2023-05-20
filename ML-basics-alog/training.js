// Initiate Values
const numPts = 500;
const learningRate = 0.00001;

// Create a plotter
const pltr = new XYpltr("myCanvas");
pltr.transformXY();
const xMax = pltr.xMax;
const yMax = pltr.yMax;
const xMin = pltr.xMin;
const yMin = pltr.yMin;

// Create Random XY Points
const xPts = [];
const yPts = [];
for (let i = 0; i < numPts; i++) {
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
for (let i = 0; i < numPts; i++) {
  desired[i] = 0;
  if (yPts[i] > f(xPts[i])) {desired[i] = 1}
}

// Create a Perceptron
const ptron = new Perceptron(2, learningRate);

// Train the Perceptron
for (let j = 0; j <= 10000; j++) {
  for (let i = 0; i < numPts; i++) {
    ptron.train([xPts[i], yPts[i]], desired[i]);
  }
}

// Display the Result
for (let i = 0; i < numPts; i++) {
  const x = xPts[i];
  const y = yPts[i];
  let guess = ptron.activate([x, y, ptron.bias]);
  let color = "black";
  if (guess == 0) color = "blue";
  pltr.plotPoint(x, y, color);
}

// Perceptron
function Perceptron(no, learningRate = 0.00001) {
  // Set Initial Values
  this.learnc = learningRate;
  this.bias = 1;
  // Compute Random Weights
  this.weights = [];
  for (let i = 0; i <= no; i++) {
    this.weights[i] = Math.random() * 2 - 1;
  }
  // Activate Function
  this.activate = function(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    } 
    if (sum > 0) {return 1} else {return 0}
  }
  // Train Function
  this.train = function(inputs, desired) {
    inputs.push(this.bias);
    let guess = this.activate(inputs);
    let error = desired - guess;
    if (error != 0) {
      for (let i = 0; i < inputs.length; i++) {
        this.weights[i] += this.learnc * error * inputs[i];         
      }
    }
  }
}
