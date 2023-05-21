const tf = require('@tensorflow/tfjs');
function gridBasedClustering(data, gridSize) {
  const tensorData = tf.tensor2d(data);
  const grid = tfsom.grid(tensorData.shape[1], gridSize, gridSize);
  const gridIndices = grid.index(tensorData);
  const clusterLabels = gridIndices.arraySync();
  return clusterLabels;
}