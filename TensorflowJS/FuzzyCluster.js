const tf = require('@tensorflow/tfjs');
function fuzzyCMeans(data, numClusters, options) {
  const tensorData = tf.tensor2d(data);
  const initialCenters = tf.randomNormal([numClusters, data.length]);
  // Perform fuzzy clustering
  const { centers, membership } = tffuzzy.cmeans(tensorData, numClusters, options, initialCenters);
  const centersArray = centers.arraySync();
  const membershipArray = membership.arraySync();
  return { centers: centersArray, membership: membershipArray };
}