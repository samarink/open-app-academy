function breadthFirstArray(root) {
  const values = [];
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    values.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return values;
}

module.exports = {
  breadthFirstArray,
};
