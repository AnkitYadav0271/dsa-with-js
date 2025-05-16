
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        if(value === undefined){
            this.head = null;
            this.tail = null;

            this.length = 0;
        }

       else{
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
       }
    }

    // push method starts here

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
        else {
            let temp = this.tail;
            temp.next = newNode;
            newNode.prev = temp;
            newNode.next = null;
            this.tail = newNode;
            this.length++;
        }
    }

    // pop method starts here

    pop(){
        if (!this.head){
            return "List is Empty ";
        }
        else {
           let temp = this.tail;
           this.tail = temp.prev;
          this.tail.next = null;
           this.length--;
           return  temp;
        }
    }
    //shift method starts here
    shift(){
        if(!this.head){
            return "List is Empty";
        }
        else{
            let temp = this.head.next;
            temp.prev = null;
            this.head = temp;
            this.length--;
            return true;
        }
    }

    //unshift starts here
    unShift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
        else {
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp;
            newNode.prev = null;
            this.length++;
            return newNode;
        }
    }
    //get method starts here ;
    get(index){
        let count = 0;
        let temp = this.head;
        if(count < 0 || count > this.length){
            return "your index is out of boundary";
        }
        while(temp.next){
            if(index === count){
                return temp;
            }
            count++;
            temp = temp.next;
        }
    }

    //set method starts here

    set(index,value){
       let temp = this.get(index);
       temp.value = value;
       return temp;
    }

    //insert method starts here

    insert(index,value){
        let newNode = new Node(value);
        let temp = this.get(index);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return  true;
        }
        if(index === 0){
            temp.prev = newNode;
           newNode.next = temp;
           this.head = newNode;
           this.length++;
           return true;
        }
        else{
            temp.prev.next=newNode;
            temp.prev = newNode;
            this.length++;
            return  true;
        }
    }
    //length method starts here

    getLength(){
        console.log(this.length);
        return this.length;
    }

    //print method starts here
    print(){
        let temp =this.head;
        while(temp){
            console.log(temp.value + " " );
            temp = temp.next;
        }
    }
    //clear method starts here
    clear (){
        this.head = null;
    }
    // reverse starts here
    reverse(){
        let tempHead = this.head;
        let tempTail = this.tail;
      if (!this.head) return  "List is Empty";
        this.head = tempTail;
        this.tail = tempHead;
        let temp = this.head;
        while(temp){
            let tempPrev = temp.prev;
            temp.prev = temp.next;
            temp.next = tempPrev;
            temp = temp.next;
        }
        return true;
    }
}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(10);
myDoublyLinkedList.push(23);
myDoublyLinkedList.push("Happy");
myDoublyLinkedList.push("Aditya");
myDoublyLinkedList.push("Papa");
myDoublyLinkedList.push("Mummy");

myDoublyLinkedList.reverse();

myDoublyLinkedList.print();
