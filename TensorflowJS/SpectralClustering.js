const tf = require('@tensorflow/tfjs');
function spectralClustering(data, numClusters) {
  const tensorData = tf.tensor2d(data);
  const affinityMatrix = tfspectral.rbfKernel(tensorData);
  const laplacianMatrix = tfspectral.normalizedLaplacian(affinityMatrix);
  const { eigenvalues, eigenvectors } = tfspectral.lanczos(laplacianMatrix, numClusters);
  const kMeansResult = tfkmeans.kmeans(eigenvectors, numClusters);
  const clusterLabels = kMeansResult.iterations.pop().assignments.arraySync();
  return clusterLabels;
}