function maxValue(node) {
  let visited = new Set();
  let stack = [node];
  let max = -Infinity;

  while (stack.length) {
    let node = stack.pop();

    if (visited.has(node.val)) continue;

    max = Math.max(max, node.val);
    visited.add(node.val);

    stack.push(...node.neighbors);
  }

  return max;
}

function maxValueRecur(node, visited=new Set()) {
  if (visited.has(node)) return -Infinity;

  visited.add(node);

  let neighborsMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited));
  return Math.max(node.val, ...neighborsMaxes);
}

module.exports = {
  maxValue,
};

