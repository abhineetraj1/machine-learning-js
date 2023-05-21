const tf = require('@tensorflow/tfjs');
function selfOrganizingMap(data, gridSize, numIterations) {
  const tensorData = tf.tensor2d(data);
  const som = tftrain.som(tensorData.shape[1], gridSize, gridSize);
  som.train(tensorData, numIterations);
  const clusterCenters = som.getCentroids();
  const clusterLabels = som.getLabels(tensorData);
  return { centers: clusterCenters.arraySync(), labels: clusterLabels.arraySync() };
}