

class Node {
    constructor(key){
        this.key = key;
        this.above = null;
        this.below = null;
        this.next = null;
        this.prev = null;
    }
}

class SkipList {
    constructor(key){
        this.head = new Node(NEG_INFINITY);
        this.tail = new Node(POS_INFINITY);
        NEG_INFINITY = 1000 * (-1 * Math.random());
        POS_INFINITY = 1000 * Math.random();
        this.heightSkipList = 0;
        this.Random = Math.random();
        this.head.next = this.tail;
        this.tail.next = this.head;
    }
    find(key){
        tempNode = this.head;
        
    }
}