// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/



var isBalanced = function(root) {
  if (!root) return true;
  let diff = Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1;
  return diff && isBalanced(root.left) && isBalanced(root.right);
};

function treeHeight(root) {
  if (!root) return -1;

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
