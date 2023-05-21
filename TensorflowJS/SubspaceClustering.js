const tf = require('@tensorflow/tfjs');
function subspaceClustering(data, numClusters, subspaceDimensions) {
  const tensorData = tf.tensor2d(data);
  const subspaceMatrix = tftrain.subspaceClustering(tensorData, numClusters, subspaceDimensions);
  const clusterLabels = tf.argMax(subspaceMatrix, 1).arraySync();
  return clusterLabels;
}