class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(value) {
       if(value === undefined){
           this.top = null;
           this.bottom = null;
           this.size = 0;
       }
       else {
           let newNode = new Node(value);
           this.top = newNode;
           this.bottom = newNode;
           this.size =1;
       }
    }

    //enque method strts here

    enqueue(value){
        let newNode = new Node(value)
        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
            this.next = null;
            this.size++;
        }
        else {
           this.bottom.next = newNode;
           this.bottom = newNode;
           this.size++;
        }
        return this;
    }

    //deque method starts here

    deque(){
        if(!this.top){
            return null;
        }
        if(!this.top.next){
            this.top = null;
            this.bottom = null;
            this.size = 0;
        }
        else{
            this.top = this.top.next;
            this.size--;
        }
        return this;
    }
   // getSize method starts here
    getSize(){
        return this.size;
    }
    //isEmpty method starts here
    isEmpty(){
        if(!this.top){
            return true;
        }
        else{
            return  false;
        }
    }
    //show method starts here

    show(){
        if(!this.top){
            return null;
        }
        else {
            let temp = this.top;
            while(temp){
                console.log(temp.value + " ");
                temp = temp.next;
            }
        }
    }
//getMin method starts here
    getMin()
    {
        // let currentValue = this.top.value;
        let temp = this.top;
        let minimum = temp.value;

        while (temp){

            if( minimum > temp.value){

               minimum = temp.value;
            }

            temp = temp.next;
        }
        return minimum;
    }
}

const myQueue = new Queue();
 // myQueue.enqueue("Happy").enqueue("Aditya").enqueue("Papa").enqueue("Mummy");
myQueue.enqueue(43).enqueue(34).enqueue(7).enqueue(54).enqueue(45).enqueue(557).enqueue(76).enqueue(3);
console.log(myQueue.getMin());


//Alright everything working as expected so good bye my code