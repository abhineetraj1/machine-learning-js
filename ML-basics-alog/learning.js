// Perceptron Object
function Perceptron(no, learningRate = 0.00001) {
  this.learnc = learningRate;
  this.bias = 1;
  this.weights = [];
  for (let i = 0; i <= no; i++) {
    this.weights[i] = Math.random() * 2 - 1;
  }
  this.activate = function(inputs) {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    if (sum > 0) {return 1} else {return 0}
  }
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

function Trainer(xArray, yArray) {
  this.xArr = xArray;
  this.yArr = yArray;
  this.Pts = this.xArr.length;
  this.learnc = 0.000001;
  this.weight = 0;
  this.bias = 1;
  this.cost;

  // Cost Function
  this.costError = function() {
      total = 0;
      for (let i = 0; i < this.Pts; i++) {
        total += (this.yArr[i] - (this.weight * this.xArr[i] + this.bias)) **2;
      }
      return total / this.Pts;
    }
  // Train Function
  this.train = function(iter) {
    for (let i = 0; i < iter; i++) {
      this.updateWeights();
    }
    this.cost = this.costError();
  }
  // Update Weights Function
  this.updateWeights = function() {
    let wx;
    let w_deriv = 0;
    let b_deriv = 0;
    for (let i = 0; i < this.Pts; i++) {
      wx = this.yArr[i] - (this.weight * this.xArr[i] + this.bias);
      w_deriv += -2 * wx * this.xArr[i];
      b_deriv += -2 * wx;
    }
    this.weight -= (w_deriv / this.Pts) * this.learnc;
    this.bias -= (b_deriv / this.Pts) * this.learnc;
  }
}
// Create a Trainer Object
xArray = [32,53,61,47,59,55,52,39,48,52,45,54,44,58,56,48,44,60];
yArray = [31,68,62,71,87,78,79,59,75,71,55,82,62,75,81,60,82,97];
let myTrainer = new Trainer(xArray, yArray);

// Create a plotter Object
let mypltr = new XYpltr("myCanvas");
mypltr.transformXY();
mypltr.transformMax(100, 100);

// Plot the Points
mypltr.plotPts(xArray.length, xArray, yArray, "blue");

function train(iter) {
  myTrainer.train(iter);
  // Display Guessed Results
  document.write("<p>Slope: " + myTrainer.weight.toFixed(2) + "</p>" +"<p>Bias:  " + myTrainer.bias.toFixed(2) + "</p>" +"<p>Cost:  " + myTrainer.cost.toFixed(2));
  mypltr.plotLine(0, myTrainer.bias, mypltr.xMax,mypltr.xMax*(myTrainer.weight)+(myTrainer.bias), "black");
}
