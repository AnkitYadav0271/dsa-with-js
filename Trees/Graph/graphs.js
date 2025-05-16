class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vtx){
        if (!this.adjacencyList[vtx]){
          this.adjacencyList[vtx] = [];
          return true;
        }
        return false;
    }

    // connection
    addEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
            return true;
        }
        return false;
    }
// removing the edges
    removeEdge(vtx1,vtx2){
        let data;
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
           this.adjacencyList[vtx2] =  this.adjacencyList[vtx2].filter((value,index)=> value !==vtx1);
            this.adjacencyList[vtx1] =  this.adjacencyList[vtx1].filter((value,index)=> value !==vtx2);
            return true;
        }
            return  false;
    }
// removing the vertex
    removeVertex(vtx){
        if(this.adjacencyList[vtx]){
         Object.keys(this.adjacencyList).forEach((curVertex)=>{
             this.adjacencyList[curVertex] = this.adjacencyList[curVertex].filter(vertex => vertex !== vtx);
         })
            delete this.adjacencyList[vtx];

            return true;
        }
        return  false;
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D")
console.log(graph.removeEdge("B","D"));
console.log(graph.removeEdge("A","C"));
console.log(graph.removeEdge("A","D"));
console.log("before graph" , graph)
console.log(graph.removeVertex("A"));
console.log(graph)
