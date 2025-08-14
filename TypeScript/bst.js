var BSTNode = /** @class */ (function () {
    function BSTNode(value) {
        if (value === null) {
            this.data = null;
        }
        else {
            this.data = value;
        }
        this.leftChild = null;
        this.rightChild = null;
    }
    return BSTNode;
}());
function insertNode(rootNode, NodeValue) {
    if (rootNode.data === null || rootNode.data === undefined) {
        rootNode.data = NodeValue;
    }
    else if (rootNode.data >= NodeValue) {
        if (rootNode.leftChild === null) {
            rootNode.leftChild = new BSTNode(NodeValue);
        }
        else {
            insertNode(rootNode.leftChild, NodeValue);
        }
    }
    else {
        if (rootNode.rightChild === null) {
            rootNode.rightChild = new BSTNode(NodeValue);
        }
        else {
            insertNode(rootNode.rightChild, NodeValue);
        }
    }
    return "Node inserted Successfully";
}
var newBST = new BSTNode();
console.log(insertNode(newBST, 49));
console.log(insertNode(newBST, 50));
console.log(insertNode(newBST, 48));
