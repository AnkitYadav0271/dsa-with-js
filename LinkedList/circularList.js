
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class circSinglyList {
    constructor(value){
        if (!value){
          this.head = null;
          this.tail = null;
        }
        else {
            let newNode = new Node(value)
            this.head = newNode;
            this.tail = this.head;
            this.tail.next = this.head;
        }
    }

    // push method is starting here

    push(value) {
        if(!value){
         console.error("Value Expected");
        }
       let newNode = new Node(value);
        if(!this.head){
           this.head = newNode;
           this.tail = newNode;
           this.tail.next = newNode
        }
        
        
        newNode.next = this.head
        this.head = newNode;
        this.tail.next = newNode

    }

    // print method is starting here

    print(){
        let tempNode = this.head;
        do {
            console.log(tempNode.value)
            tempNode = tempNode.next;
        } while (tempNode !== this.head);

    }
}


const circularSinglyLinkedList = new circSinglyList(12)
circularSinglyLinkedList.print()