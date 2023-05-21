const tf = require('@tensorflow/tfjs');
function probabilisticClustering(data, numClusters) {
  const tensorData = tf.tensor2d(data);
  const gmm = tfmixtures.gmm(tensorData.shape[1], numClusters);
  gmm.fit(tensorData);
  const clusterLabels = gmm.predict(tensorData).arraySync();
  return clusterLabels;
}
