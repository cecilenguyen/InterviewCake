/* Write a method to check that a binary tree ↴ is a valid binary search tree.*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// No duplicate node values implementation

function isBinarySearchTree(treeRoot) {

  let tree = [];
  addToTreeArr(treeRoot, tree);
  
  for (let i = 0; i < tree.length-1; i++) {
    if (tree[i] > tree[i+1]) {
      return false;
    }
  }
  
  return true;
}

function addToTreeArr(treeRoot, tree) {
  
  if (treeRoot === null) { 
    return;
  }
  
  addToTreeArr(treeRoot.left, tree);
  tree.push(treeRoot.value);
  addToTreeArr(treeRoot.right, tree);
}


// With duplicate node values implementation

function isBinarySearchTree(treeRoot) {
  return isBST(treeRoot.left, Number.MIN_SAFE_INTEGER, treeRoot.value) && isBST(treeRoot.right, treeRoot.value, Number.MAX_SAFE_INTEGER)
}

function isBST(treeRoot, min, max) {
  
  if (treeRoot === null) {
    return true;
  }
  
  if (treeRoot.value < min || treeRoot.value > max) {
    return false;
  }
  
  return isBST(treeRoot.left, min, treeRoot.value) && isBST(treeRoot.right, treeRoot.value, max);
}















// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}