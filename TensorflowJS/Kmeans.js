const KMeans = require('kmeans-js');
// Generate sample data
const data = [[1, 2],[1, 4],[1, 0],[4, 2],[4, 4],[4, 0]];
// Perform clustering using K-means
const kmeans = new KMeans();
const clusters = kmeans.cluster(data, 2);

console.log('Clustering Result:');
clusters.forEach((cluster, i) => {
  console.log(`Cluster ${i + 1}:`);
  console.log(cluster);
});