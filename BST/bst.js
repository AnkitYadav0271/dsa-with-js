
class BSTNode {
    constructor(value) {

        if (!value){
            this.data = null;
        }
        else{
          this.data = value;
        }
        
        this.leftChild = null
        this.rightChild = null
    }
}

function insertNode(rootNode,nodeValue){
if(rootNode.data === null){
    rootNode.data = nodeValue;
}

else if (rootNode.data >= nodeValue){
    if (rootNode.leftChild === null){
        rootNode.leftChild = new BSTNode(nodeValue);
    }
    else {
        insertNode(rootNode.leftChild,nodeValue);
    }
}

else{
    if (rootNode.rightChild === null) {
        rootNode.rightChild = new BSTNode(nodeValue);
    }

    else {
        insertNode(rootNode.rightChild, nodeValue)
    }
}
return "Node inserted successfully";
}

const newBST = new BSTNode(65);

console.log(insertNode(newBST,39));
console.log(insertNode(newBST,54));
console.log(insertNode(newBST,36));

console.log(newBST.data)
