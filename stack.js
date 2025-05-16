
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(value) {

        if (value === undefined){


            this.top = null;
            this.bottom = null;
            this.size = 0;
        }
        else {
            let newNode = new Node(value);
            newNode.value = value;
            this.top = newNode;
            this.bottom = newNode;
            this.size = 1;
        }
    }

    //push method starts here

    push(value){
        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        this.size++;
        if(!this.bottom){
            this.bottom = newNode;
        }
    }

    // pop method starts here

    pop (){
       let  temp = this.top;
       if(temp.next === null){
           this.top = null;
           this.bottom = null
           this.size = 0;
           return temp.value;
       }
       if(this.size === 0){
           this.bottom = null;
       }
       else{
           this.top = temp.next;
           this.size--;
           return  temp.value;
       }
    }

    //show method starts here

    show (){
        let temp = this.top;
        if(!this.top) return "Stack is empty";
        while(temp){
            console.log(temp.value + " ");
            temp = temp.next;
        }

    }
}

const myStack = new Stack();
myStack.push("Happy");
myStack.push("Aditya");
myStack.push("Papa");
myStack.push("Mummy");
myStack.pop();
myStack.show();
