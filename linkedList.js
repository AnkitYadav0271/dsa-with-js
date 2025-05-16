
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        if (value === undefined) {
            this.head=null;
            this.tail = null;
            this.length = 0;
        }
    else{
        this.head = new Node(value);
        this.tail = this.head;
       
        this.length = 1;
    }
    }

    push (value) {
    let newNode = new Node(value)
        if(!this.head){
            this.head =  newNode;
            this.tail = newNode;
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }

    //*Pop method
    pop() {

        if(this.length === 0) return undefined;
        let temp = this.head;
        let prev = this.head;

        while(temp.next != null){
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length ===0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    //? Unshift Method 
    unShift(value) {
        let newNode = new Node(value);

       if (this.head === null) {
        this.head = newNode;
        this.tail=newNode;
        this.head.next = null;
        this.length++;
        return this.length
       }
       
       else {
          let temp = this.head;
          this.head = newNode;
          this.head.next = temp;
          this.length++;
          return this.length;
       }
    }

    //?Shift Starts here 
    shift(){
        if(this.head === null ){
            return undefined;
        }
        else{
            let temp = this.head;
            this.head = temp.next;
            this.length--;
            return temp;
        }

        if(this.head === null) this.tail = null;
    }
   getFirst(){
    if(!this.head) return undefined;
   return this.head.value;
   }
   getLast() {
    if(!this.tail) return undefined;
    return this.tail.value;
   }
   //* get starts here 
   get(index){
    let counter = 0;
    let temp = this.head;
    while(temp){
        if (counter === index){
            return temp;
        }
        counter++;
        temp = temp.next;
    }
    return null;
   }
   //* set starts here
   set(index,value){
    let counter = 0;
    let temp = this.head;
    while(temp){
        if(counter === index){
            temp.value = value;
            return true
        }
        counter++;
        temp = temp.next;
    }
    return false;
   }
   //* insert starts here (in the insert we want to insert new node at any where in the linked by index)
   insert(index,value){
    if(index < 0 || index > this.length){
        return false;
    }
    
    
    let newNode = new Node(value)
    let temp = this.get(index);
    let prev = this.get(index-1);
    
    newNode.next = prev.next;
    prev.next = newNode;
    if(index === 0){
        temp = this.head;
        this.head = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    if (index === this.length) {
        this.tail = newNode;
    }
    this.length++;
    return true;
   }

   //*size method starts here 
   size(){
    return this.length;
   }
   //* clear method starts here 

   clear(){
    this.head = null;
   }
}

const myLinkedList = new LinkedList()
myLinkedList.push(23)
myLinkedList.push("Happy");
myLinkedList.push(5);
myLinkedList.push(2);
myLinkedList.push(6);

myLinkedList.unShift("Anand");

myLinkedList.set(4,"Aman")
myLinkedList.insert(1,"Pallavi");
console.log(myLinkedList.get(1))
console.log(myLinkedList.size())




