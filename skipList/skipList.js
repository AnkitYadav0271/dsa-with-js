

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
    constructor(){
       let NEG_INFINITY = 10000000 * (-1 * Math.random());  //?the minimum number to keep track of first entry point
       let POS_INFINITY = 10000000 * Math.random();         //?the maximum number to keep track of the last entry that should be more than max value that will be entered in list
 
        this.head = new Node(NEG_INFINITY);
        this.tail = new Node(POS_INFINITY);
        this.heightSkipList = 0;
        this.Random = Math.random();
        this.head.next = this.tail;
        this.tail.next = this.head;

    
    }
    find(key){
      let  tempNode = this.head;

        while ( tempNode.below){
            tempNode = tempNode.below;
            while(key >= tempNode.key){
                tempNode = tempNode.key;
            }
        }
        return tempNode;
        
    }
    insert (key){
        let position =  this.find(key);
        let q;
        let level = -1;
        let numberOfHeads = -1;
        if(position.key === key){
            return position;
        }
        do {
            numberOfHeads++;
            level++;
            this.canIncreaseLevel(level)
            q = position;
            while (position.above === null){
                position = position.prev;
            }

            position = position.above;
            
            q = this.insertAfterAbove(position,q,key);

        } while (Math.random() >= 0.5);

        return q;
    }


    remove( key ){
     let NodeToBeRemoved = find(key);
     if (nodeBeforeNewNode.key == key ) null;
     this.removeReferencesToNode(NodeToBeRemoved);
     while( NodeToBeRemoved != null){
        this.removeReferencesToNode(NodeToBeRemoved);
        if ( NodeToBeRemoved.above != null){
            NodeToBeRemoved = NodeToBeRemoved.above;
        }
        else{
            break;
        }
     }

    return NodeToBeRemoved;
    }

    canIncreaseLevel(level){
        if (level >= this.heightSkipList){
            this.heightSkipList++;
            this.addEmptyLevel();
        }
    }

    addEmptyLevel(){
        let newHeadNode = new Node(this.NEG_INFINITY);
        let newTailNode = new Node(this.POS_INFINITY);
        newHeadNode.next = newTailNode;
        newHeadNode.below = this.head;
        newTailNode.prev = newHeadNode;
        newTailNode.below = this.tail;

        this.head.above = newHeadNode;
        this.tail.above = newTailNode

        this.head = newHeadNode;
        this.tail = newTailNode;
    
    }

    insertAfterAbove(position,q,key){
        let newNode = new Node(key);
        let nodeBeforeNewNode = position.below.below;
        setBeforeAfterReferences(q,newNode);
        setAboveAndBelowReferences(position,key,newNode,nodeBeforeNewNode);

        return newNode;
        }

       
        

         
         print(){
            let list = []
            let starting = this.head;
            let highestLevel = starting;
            let level = this.heightSkipList;

            while(highestLevel != null){
                console.log(`${level} is printing`)
                while (starting != null){
                    list.shift(starting.key)
                    starting = starting.next;
                }
                 highestLevel = highestLevel.n=below;
            starting = highestLevel;
            level--;

            }
           console.log(list)


         }


          setBeforeAfterReferences(q, newNode){
            newNode.next = q.next;
            newNode.prev = q;
            newNode.next.prev = newNode;
            q.next = newNode;

        }
      
        removeReferencesToNode(NodeToBeRemoved){
            let afterNodeToBeRemoved = NodeToBeRemoved.next;
            let beforeNodeToBeRemoved = NodeToBeRemoved.prev;

            beforeNodeToBeRemoved.next = afterNodeToBeRemoved;
            afterNodeToBeRemoved.prev = beforeNodeToBeRemoved;
         }

         setAboveAndBelowReferences(position, key , newNode , nodeBeforeNewNode){
            if(nodeBeforeNewNode != null){
                while(true){
                    if(nodeBeforeNewNode.next.key != key){
                        nodeBeforeNewNode = nodeBeforeNewNode.next;
                    }
                    else
                    {
                        break;
                    }
                }

                newNode.below = nodeBeforeNewNode.next;
                nodeBeforeNewNode.next.above = newNode;

                if (position != null){
                    if(position.next.key === key) newNode.above = position.next;
                }
            }
        }
        
 }





 let skipList = new  SkipList();
 skipList.insert(34)