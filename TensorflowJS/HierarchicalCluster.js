const hclust = require('ml-hclust');
// Generate sample data
const data = [[1, 2], [1, 4], [1, 0], [4, 2], [4, 4], [4, 0]];
// Perform hierarchical clustering
const dendrogram = hclust(data, 'single-linkage');
console.log('Clustering Result:');
console.log(dendrogram);
