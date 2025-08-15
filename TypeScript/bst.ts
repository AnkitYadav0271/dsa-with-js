
type value = {
     data : number | null | undefined;
}


class BSTNode {
    data : number | null | undefined;
    leftChild: BSTNode | null;
    rightChild:BSTNode | null
    constructor(value?:number  | null | undefined|any){
          if (value === null ) {
            this.data = null;
          }

          else {
            this.data = value;
          }

          this.leftChild = null;
          this.rightChild = null;
    }
}

function insertNode (rootNode:BSTNode,NodeValue:number){
    if(rootNode.data === null || rootNode.data === undefined){
        rootNode.data = NodeValue;
    }

    else if ( rootNode.data >= NodeValue ){
            if (rootNode.leftChild === null){
                rootNode.leftChild = new BSTNode(NodeValue);
            }
            else {
                insertNode(rootNode.leftChild,NodeValue);
            }
    }
    else {
        if (rootNode.rightChild === null){
            rootNode.rightChild = new BSTNode(NodeValue);
        }
        else {
            insertNode(rootNode.rightChild, NodeValue);
        }
    }

    return "Node inserted Successfully";
}

function preOrderTraversal(rootNode:BSTNode){
    if (rootNode.data === null){
        return
    }
     console.log(rootNode.data);
     preOrderTraversal(rootNode.leftChild);
     preOrderTraversal(rootNode.rightChild);


}


const newBST = new BSTNode();
console.log(insertNode(newBST,49));
console.log(insertNode(newBST,50));
console.log(insertNode(newBST,48))