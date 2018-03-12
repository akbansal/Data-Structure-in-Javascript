//******************************************************************
function NODE(value) {
  this.visited = false;
  this.data = value;
  this.children = [];
}
function GRAPH(){
  this.vertices = [];
  this.edges = {};

  return {
    addNode: function(n){
      const node = new NODE(n);
      this.vertices.push(node);
    }
  }

}

//Depth First Search
GRAPH.prototype.DFS = function(node){
  console.log(" Node = " + node);
  node.visited = true;
  node.children.forEach(function(n) {
    if(!n.visited) {
      this.DFS(n);
    }
  });
};
//Breath First Search
GRAPH.prototype.BFS = function(){

}

let g = new GRAPH();
g.addNode(0);
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);
g.vertices = [1,2,3,4,5,6];
