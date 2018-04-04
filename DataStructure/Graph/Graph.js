// var _ = require('underscore');
'use strict';
const Queue = require('../Queue/queue.js');

function NODE(value) {
  this.visited = false	;
  this.data = value;
  this.children = [];
}

function GRAPH(){
  this.vertices = {};
  this.edges = {};
}
GRAPH.prototype.addNode = function(n){
  const node = new NODE(n);
  this.vertices[n] = node;
};

GRAPH.prototype.addEdge = function(x, y) {
  if(this.edges[x]){
    this.edges[x].push(this.vertices[y]);
  }else{
    this.edges[x] = [this.vertices[y]];
  }
};

GRAPH.prototype.print = function(){
  console.log(this.edges);
};

//Depth First Search
GRAPH.prototype.DFS = function(node){
  let self = this;
  console.log(" Node = " + node);
  let currNode = self.vertices[node];
  currNode.visited = true;
  self.edges[currNode.data] && self.edges[currNode.data].forEach(function(n) {
    if(!n.visited) {
      self.DFS(n.data);
    }
  });
};

//Breath First Search
GRAPH.prototype.BFS = function(node) {
	let q = new Queue();
  const self = this;
  let currNode = self.vertices[node];
	q.enqueue(currNode);
  while(!q.isEmpty()){
  	console.log( "q is - " + q.print());
    let node = q.dequeue();
    node.visited = true;
    console.log("Node = " + node.data);
    self.edges[node.data] && self.edges[node.data].forEach(function(n) {
      if(!n.visited) {
      	console.log("n = " + n.data);
				q.enqueue(n);
      }
    });
  }
};

let g = new GRAPH();
g.addNode(0);
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);

g.addEdge(0,1);
g.addEdge(0,4);
g.addEdge(0,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(2,1);
g.addEdge(3,2);
g.addEdge(3,4);

//g.print();
g.BFS(0);
//g.DFS(0);


