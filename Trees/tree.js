class  Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    //insert function starts here
insert(value){
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
    let temp = this.root;
        while(true){

            if (value === temp.value){
                return undefined;
            }
            if (temp.value > newNode.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;

                }
            } else {
                if (temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                else {
                    temp = temp.right;

                }
            }
        }
}

//includes method starts here
includes(value) {
    let temp = this.root;
    if (temp === null) return undefined;
    while (temp){
        if (temp.value === value){
            return  true;
        }
       else if (temp.value < value){
            temp = temp.right;
        }
       else if (temp.value > value){
            temp = temp.left;
        }
    }
return  false;
}

//delete method starts here
//! currently not able to perform delete operation on trees but definitely will do it in next some days confirm

delete(value)
{
   this.root = this.deleteNode(this.root,value);
}
deleteNode(node,value){
        if (node === null) return node;
        if (node.value > value){
             node.left = this.deleteNode(node.left,value);
        }
        else  if (node.value < value){
            node.right = this.deleteNode(node.right,value);
        }
        else {
            if (!node.left && !node.right){
                return null;
            }
            else if (!node.left){
                return node.right;
            }
            else if (!node.right) return node.left;
            else {
            let minValue = this.min(node.right);
            node.value = minValue;
            node.right = this.deleteNode(node.right,minValue);
            }
        }
       return node;
    }
min(node){
   if (!node.left) {
       return node.value;
   }
       else {
           return (this.min(node));
       }
}
max(node){
        if (!node.right){
            return node.value;
        }
        else {
            return this.max(node.right);
        }
}
//Breadth first search going to start here
bfs(){
        let queue = [];
        let data = [];
        let current = this.root;
        queue.push(current);

    while ( queue.length) {
        current = queue.shift();
        data.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return data;
};

//Depth search is Starting here Darling
preorderTraversal(){
return this.preorderRec(this.root,[]);
}
preorderRec(node, data){

        if (!node) {
            return data;
        }

            data.push(node.value);
           data = this.preorderRec(node.left,data);
            data = this.preorderRec(node.right,data);

        return data;
}

    inorderTraversal()
    {
        return this.inorderRec(this.root,[]);
    }
    inorderRec(node,data){
        if (!node){
            return data;
        }

           data = this.inorderRec(node.left, data);
            data.push(node.value);
           data = this.inorderRec(node.right, data);
           return data;

    }

    //post order traversal starts here left right root
    postOrderTraversal(){
    return this.postOrderRec(this.root,[]);
    }
    postOrderRec(node,data){
    if (!node){
        return data;
    }
    data = this.postOrderRec(node.left,data);

    data = this.postOrderRec(node.right,data)
        data.push(node.value);
        return data;
    }
}

//inorder traversal starting here

const tree = new BST();
tree.insert(8);
tree.insert(5);
tree.insert(9);
tree.insert(4);
tree.insert(0);
tree.insert(64);
tree.insert(48);
tree.insert(49);
tree.insert(41);
console.log(tree.postOrderTraversal());
// console.log(tree.preorderTraversal());
// console.log(tree.inorderTraversal());

