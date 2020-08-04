function depthFirstRecur(node, visited = new Set()) {
  // if this node has already been visited, then return early
  if (visited.has(node.val)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node.val);
  visited.add(node.val);

  // then explore each of its neighbors
  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}

function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    // if this node has already been visited, then skip this node
    if (visited.has(node.val)) continue;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then add its neighbors to the stack to be explored
    stack.push(...node.neighbors);
  }
}
