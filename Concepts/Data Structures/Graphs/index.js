/*
Set of values that are related in a pair-wise fashion
// Each item in a graph is called a node/vertex
// Nodes/vertices are connected with edges

Types of Graphs

- Directed Graphs
    - There are directions associated with traveling from node to node
    - Ex) One-way street
- Undirected Graphs
    - Non-directional when traveling from node to node
    - Ex) Highway that runs in both directions

- Weighted Graphs
    - Every edge (arrow from node to node) holds a certain "weight" value
    - Ex) Shortest/Optimal Path
- Unweighted Graphs
    - Edges do not hold weight

- Cyclic
    - Vertices are all connected by edges => You'd be able to get back to the original vertex
- Acyclic
    - Vertices are not all connected by edges => opening

Pros:
    - Relationships
    - Algorithms to traverse graphs and finding shortest/optimal path
Cons:
    - Scalability
*/

/* Example - Graphing Data */
/* Ex) 
       2 -------- 0
   1       3               (1,2,3 are connected)
*/

// Edge List
const graph1 = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
]; // x and y represent vertices that are connected to one another by an edge

// Adjacency List
const graph2Array = [[2], [2, 3], [0, 1, 3], [1, 2]]; // each index of the array is the value of the actual graph node that is connected to it

// should be done using an object!
const graph2Object = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};

// Adjacency Matrix
const graph3Array = [
  [0, 0, 1, 0], // 2
  [0, 0, 1, 1], // 2,3
  [1, 1, 0, 1], // 0,1,3
  [0, 1, 1, 0] // 1,2
];

const graph3Object = {
  0: [0, 0, 1, 0], // 2
  1: [0, 0, 1, 1], // 2,3
  2: [1, 1, 0, 1], // 0,1,3
  3: [0, 1, 1, 0] // 1,2
};
// 0 means no connection
// 1 means a connection
// each array index represents that number (e.g index 0 represents the node that has a value of 0)

/* Example - Graph Implementation for Undirected Graph */
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = []; // add that value as a key and set the property to be an empty array
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    // Undirected Graph
    this.adjacentList[node1].push(node2); // go to "node1" key and push "node2" into the empty array
    this.adjacentList[node2].push(node1); // go to "node2" key and push "node1" into the empty array
  }
  showConnections() {
    /* not important - just a helper function to check graph!!! */
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}
var myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections(); // used just to validate if graph was built correctly
