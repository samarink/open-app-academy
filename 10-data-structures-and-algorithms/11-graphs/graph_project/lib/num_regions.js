function numRegions(graph) {
  let visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (depthFirst(node, graph, visited)) {
      count += 1;
    }
  }

  return count;
}

function depthFirst(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);
  graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited));
  return true;
}

let exampleGraph = {
  'a': ['b', 'd', 'c'],
  'b': [],
  'c': ['d', 'b']
}

module.exports = {
  numRegions,
};

