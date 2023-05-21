const tf = require('@tensorflow/tfjs-node');
const { linearRegression, polynomialRegression, ridgeRegression, lassoRegression, decisionTreeRegression, randomForestRegression, svr, gradientBoostingRegression } = require('regression-js');

// Generate sample regression data
const generateData = () => {
  const numSamples = 100;
  const xs = tf.linspace(0, 1, numSamples);
  const ys = tf.mul(2, xs).add(tf.randomNormal([numSamples]));
  return [xs, ys];
};

const [xs, ys] = generateData();

// Linear Regression
const linearModel = linearRegression(xs, ys);
const linearPredictions = linearModel.predict(xs);

// Polynomial Regression
const polynomialModel = polynomialRegression(xs, ys, 2); // Degree 2 polynomial
const polynomialPredictions = polynomialModel.predict(xs);

// Ridge Regression
const ridgeModel = ridgeRegression(xs, ys, 0.1); // Alpha = 0.1
const ridgePredictions = ridgeModel.predict(xs);

// Lasso Regression
const lassoModel = lassoRegression(xs, ys, 0.1); // Lambda = 0.1
const lassoPredictions = lassoModel.predict(xs);

// Decision Tree Regression
const decisionTreeModel = decisionTreeRegression(xs, ys, 3); // Max depth = 3
const decisionTreePredictions = decisionTreeModel.predict(xs);

// Random Forest Regression
const randomForestModel = randomForestRegression(xs, ys, 5, 10); // Num trees = 5, Max depth = 10
const randomForestPredictions = randomForestModel.predict(xs);

// Support Vector Regression (SVR)
const svrModel = svr(xs, ys, { kernel: 'linear', C: 1.0, epsilon: 0.1 }); // Linear kernel, C = 1.0, epsilon = 0.1
const svrPredictions = svrModel.predict(xs);

// Gradient Boosting Regression
const gradientBoostingModel = gradientBoostingRegression(xs, ys, 5, 0.1, 100); // Num trees = 5, Learning rate = 0.1, Num iterations = 100
const gradientBoostingPredictions = gradientBoostingModel.predict(xs);

// Print the predictions
console.log('Linear Regression Predictions:');
console.log(linearPredictions.arraySync());

console.log('Polynomial Regression Predictions:');
console.log(polynomialPredictions.arraySync());

console.log('Ridge Regression Predictions:');
console.log(ridgePredictions.arraySync());

console.log('Lasso Regression Predictions:');
console.log(lassoPredictions.arraySync());

console.log('Decision Tree Regression Predictions:');
console.log(decisionTreePredictions.arraySync());

console.log('Random Forest Regression Predictions:');
console.log(randomForestPredictions.arraySync());

console.log('SVR Predictions:');
console.log(svrPredictions.arraySync());

console.log('Gradient Boosting Regression Predictions:');
console.log(gradientBoostingPredictions.arraySync());
