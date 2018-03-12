/**
 * Javascript Implementation.
 * Stack Implementation.
 */

// var _ = require('underscore');

function Node(val) {
  this.data = val;
  this.prev = null;
}

function Stack() {
  this.top = null;
}
Stack.prototype.push = function(data) {
  //console.log("Adding data "+ data + " On Stack.");
  const node = new Node(data);
  if(this.top === null){
    this.top = node;
  } else {
    node.prev = this.top;
    this.top = node;
  }
}

Stack.prototype.pop = function() {
  //console.log("Poping data from Stack.");
  if(this.top === null){
    console.log("Stack is empty");
  } else {
    let item = this.top;
    this.top = this.top.prev;
    return item.data;
  }
}

Stack.prototype.peek = function() {
  //console.log("Peeking data from Stack.");
  if(this.top === null){
    console.log("Stack is empty");
  } else {
    return this.top.data;
  }
}


Stack.prototype.print = function() {
  console.log("Printing Stack...");
  let temp = this.top;
  while(temp !== null) {
    console.log(temp.data);
    temp = temp.prev;
  }
}

Stack.prototype.isEmpty = function() {
  return this.top === null;
}

Stack.prototype.sort = function() {
  let sortedStack = new Stack();

  while( !this.isEmpty()){
    const temp = this.pop();
    while(!sortedStack.isEmpty() && sortedStack.peek() > temp){
      this.push(sortedStack.pop());
    }
    sortedStack.push(temp);
  }
  sortedStack.print();
}

let unsortedStack = new Stack();
unsortedStack.push(2);
unsortedStack.push(10);
unsortedStack.push(18);
unsortedStack.push(15);
unsortedStack.push(11);
unsortedStack.push(5);
unsortedStack.push(9);
unsortedStack.push(3);
unsortedStack.push(1);
unsortedStack.print();
console.log("\n\n");
unsortedStack.sort();