
class MyArray {
    constructor(){
    this.length = 0;
    this.data = {}
    }

    push (element) {
        this.data[this.length] = element;
        this.length++;
       
        return this.length;
    }

    get (index){
        if (index <= this.length) {
            return this.data[index]
        }
        else {
            return undefined;
        }
    }

    //pop element starts here 

    pop () {

        if(this.length === 0){
            return "Array is empty"
        }
         const lastItem = this.data[this.length-1];
         
         delete this.data[this.length-1];
         this.length--;
         return lastItem;
    }

    shift () {
        const firstItem = this.data[0]

       
        for (let i = 0; i < this.length-1; i++) {
           this.data[i] = this.data[i+1];   
        }
        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }

    deleteIndex(index){
        if(index > this.length || index < 0){
            return "Enter a valid Index no"
        }
    let indexValue = this.data[index];
    
    for(let i = index; i< this.length-1;i++){
        
           this.data[i]=this.data[i];
        
    }
     delete this.data[this.length-1];
    this.length--;
    return indexValue;
    }
}

const newArray = new MyArray(10);
newArray.push("Happy")
newArray.push('Aditya');
newArray.push(true)
newArray.push(10);
newArray.push("Sajjan");
console.log(newArray.deleteIndex(14));
console.log(newArray)