const DBSCAN = require('dbscan');
// Generate sample data
const data = [[1, 2],[1, 4],[1, 0],[4, 2],[4, 4],[4, 0]];
// Perform DBSCAN clustering
const dbscan = new DBSCAN();
const clusters = dbscan.run(data, 1, 2);
console.log('Clustering Result:');
clusters.forEach((cluster, i) => {
  console.log(`Cluster ${i + 1}:`);
  console.log(cluster);
});